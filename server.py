import os, json, secrets, mimetypes
from datetime import datetime, timezone
from pathlib import Path
from threading import Lock
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from urllib.request import Request, urlopen

BASE_DIR = Path(__file__).resolve().parent
DATA_FILE = BASE_DIR / 'data.json'
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'AMBIKA_ADMIN_CHANGE_ME')
LOTTERY_URL = os.environ.get('LOTTERY_URL', 'https://draw.ar-lottery01.com/WinGo/WinGo_1M/GetHistoryIssuePage.json')
SECRET_KEY = os.environ.get('SECRET_KEY', secrets.token_hex(32))
LOCK = Lock()
SESSIONS = set()
DEFAULT = {
 'settings': {
  'appName':'AMBIKA HACK','logoUrl':'','registerUrl':'https://www.veergame37.com/#/register?invitationCode=91156122519',
  'rechargeUrl':'https://www.veergame37.com/#/wallet/recharge','referralCode':'91156122519','telegramSupport':'https://t.me/queenambika122',
  'telegramUsername':'@queenambika122','broadcastMessage':'','previewLossCount':1,'minRecharge':500
 }, 'users':[], 'keys':[]
}

def now_iso(): return datetime.now(timezone.utc).isoformat()
def load_data():
 with LOCK:
  if not DATA_FILE.exists(): DATA_FILE.write_text(json.dumps(DEFAULT,indent=2),encoding='utf-8')
  try: d=json.loads(DATA_FILE.read_text(encoding='utf-8'))
  except Exception: d=json.loads(json.dumps(DEFAULT))
  for k,v in DEFAULT.items(): d.setdefault(k,json.loads(json.dumps(v)))
  return d

def save_data(d):
 tmp=DATA_FILE.with_suffix('.tmp')
 with LOCK:
  tmp.write_text(json.dumps(d,indent=2,ensure_ascii=False),encoding='utf-8'); tmp.replace(DATA_FILE)

def settings_clean(s):
 out=dict(DEFAULT['settings']); out.update(s or {})
 try: out['previewLossCount']=max(0,min(4,int(out.get('previewLossCount',1))))
 except: out['previewLossCount']=1
 try: out['minRecharge']=max(0,float(out.get('minRecharge',300)))
 except: out['minRecharge']=300
 return out

def uid_norm(v): return ''.join(c for c in str(v or '').strip() if c.isdigit())
def expiry_dt(v):
 if not v: return None
 t=str(v).strip().replace('Z','+00:00')
 try: d=datetime.fromisoformat(t)
 except Exception:
  try: d=datetime.strptime(t,'%Y-%m-%d').replace(tzinfo=timezone.utc)
  except Exception: return None
 return d.replace(tzinfo=d.tzinfo or timezone.utc).astimezone(timezone.utc)

def remaining(v):
 d=expiry_dt(v)
 if not d: return 'Permanent'
 sec=int((d-datetime.now(timezone.utc)).total_seconds())
 if sec<=0: return 'Expired'
 days,rem=divmod(sec,86400); hours=rem//3600; mins=(rem%3600)//60
 return f'{days}d {hours}h remaining' if days else f'{hours}h {mins}m remaining'

def auth_result(record,d,hwid):
 s=settings_clean(d['settings']); exp=record.get('expiresAt','')
 if expiry_dt(exp) and expiry_dt(exp)<=datetime.now(timezone.utc): return {'success':False,'expired':True,'msg':'Access has expired.'}
 if str(record.get('status','active')).lower() not in ('active','enabled'): return {'success':False,'msg':'Access is disabled by admin.'}
 required=float(s.get('minRecharge',300) or 0); recharge=float(record.get('todayRecharge',0) or 0)
 if recharge < required:
  return {'success':False,'pending_recharge':True,'today_recharge':recharge,'required_recharge':required,'remaining_recharge':max(0,required-recharge),'registerUrl':s['registerUrl'],'rechargeUrl':s['rechargeUrl'],'telegramSupport':s['telegramSupport'],'telegramUsername':s['telegramUsername'],'msg':f'Minimum recharge of ₹{required:g} is required.'}
 saved=str(record.get('hwid','')).strip(); hwid=str(hwid or '').strip()
 if saved and hwid and saved != hwid: return {'success':False,'msg':'This access is already bound to another device.'}
 if hwid and not saved:
  record['hwid']=hwid; record['updatedAt']=now_iso(); save_data(d)
 return {'success':True,'uid':record.get('uid','KEY'),'plan':record.get('plan','VIP'),'expiresAt':exp,'remainingText':remaining(exp),'today_recharge':recharge,'msg':'Access granted.'}

def read_json(handler):
 try:
  n=int(handler.headers.get('Content-Length','0')); return json.loads(handler.rfile.read(n) or b'{}')
 except Exception: return {}

def is_admin(handler):
 cookie=handler.headers.get('Cookie','')
 for part in cookie.split(';'):
  k,_,v=part.strip().partition('=')
  if k=='ambika_admin' and v in SESSIONS: return True
 return False

class Handler(SimpleHTTPRequestHandler):
 def __init__(self,*a,**kw): super().__init__(*a,directory=str(BASE_DIR),**kw)
 def log_message(self,fmt,*args): pass
 def end_headers(self):
  self.send_header('Cache-Control','no-store, max-age=0')
  super().end_headers()

 def send_json(self,obj,status=200,extra=None):
  raw=json.dumps(obj,ensure_ascii=False).encode()
  self.send_response(status); self.send_header('Content-Type','application/json; charset=utf-8'); self.send_header('Cache-Control','no-store')
  if extra:
   for k,v in extra.items(): self.send_header(k,v)
  self.end_headers(); self.wfile.write(raw)
 def do_GET(self):
  path=urlparse(self.path).path
  if path=='/api/health': return self.send_json({'ok':True,'service':'ambika-hack','time':now_iso()})
  if path=='/api/wingo':
   try:
    req=Request(LOTTERY_URL,headers={'User-Agent':'Mozilla/5.0'}); raw=urlopen(req,timeout=8).read(); data=json.loads(raw.decode('utf-8'))
    return self.send_json(data)
   except Exception as e: return self.send_json({'success':False,'msg':'Live result source unavailable.','error':str(e)},502)
  if path=='/api/keys': return self.handle_api(parse_qs(urlparse(self.path).query).get('action',['get_all_data'])[0],{})
  if path in ('/admin','/admin.html'): self.path='/admin.html'
  return super().do_GET()
 def do_POST(self):
  path=urlparse(self.path).path
  if path=='/api/keys':
   p=read_json(self); return self.handle_api(p.get('action','get_all_data'),p)
  return self.send_json({'success':False,'msg':'Not found'},404)
 def handle_api(self,action,p):
  d=load_data()
  if action=='admin_login':
   if secrets.compare_digest(str(p.get('password','')),ADMIN_PASSWORD):
    token=secrets.token_urlsafe(32); SESSIONS.add(token)
    return self.send_json({'success':True,'msg':'Admin login successful.'},200,{'Set-Cookie':f'ambika_admin={token}; Path=/; HttpOnly; SameSite=Lax'})
   return self.send_json({'success':False,'msg':'Invalid admin password.'},401)
  if action=='admin_logout':
   cookie=self.headers.get('Cookie','');
   for part in cookie.split(';'):
    k,_,v=part.strip().partition('=')
    if k=='ambika_admin': SESSIONS.discard(v)
   return self.send_json({'success':True},200,{'Set-Cookie':'ambika_admin=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax'})
  if action=='get_all_data':
   out={'success':True,'settings':settings_clean(d['settings'])}
   if is_admin(self): out.update(users=d.get('users',[]),keys=d.get('keys',[]))
   return self.send_json(out)
  if action=='validate_uid':
   uid=uid_norm(p.get('uid')); u=next((x for x in d['users'] if uid_norm(x.get('uid'))==uid),None)
   if not u: return self.send_json({'success':False,'msg':'UID is not registered under this service.','registerUrl':settings_clean(d['settings'])['registerUrl']})
   return self.send_json(auth_result(u,d,p.get('hwid')))
  if action=='validate_key':
   key=str(p.get('key','')).strip().upper(); k=next((x for x in d['keys'] if str(x.get('key','')).upper()==key),None)
   if not k: return self.send_json({'success':False,'msg':'Invalid VIP Key.'})
   k['todayRecharge'] = 10**9
   return self.send_json(auth_result(k,d,p.get('hwid')))
  if not is_admin(self): return self.send_json({'success':False,'msg':'Admin authentication required.'},401)
  if action=='save_settings':
   d['settings']=settings_clean(p.get('settings',{})); save_data(d); return self.send_json({'success':True,'settings':d['settings']})
  if action in ('add_uid','update_uid'):
   uid=uid_norm(p.get('uid'))
   if len(uid)<3:return self.send_json({'success':False,'msg':'UID must contain at least 3 digits.'},400)
   users=d['users']; ex=next((u for u in users if uid_norm(u.get('uid'))==uid),None); now=now_iso()
   rec={'uid':uid,'plan':str(p.get('plan') or 'VIP'),'expiresAt':str(p.get('expiresAt') or '').strip(),'status':'active' if p.get('active',True) else 'disabled','todayRecharge':float(p.get('todayRecharge',0) or 0),'notes':str(p.get('notes') or ''),'hwid':str(p.get('hwid') or (ex or {}).get('hwid','')).strip(),'createdAt':(ex or {}).get('createdAt',now),'updatedAt':now}
   if action=='add_uid' and ex:return self.send_json({'success':False,'msg':'UID already exists.'},409)
   if ex: ex.update(rec)
   else: users.append(rec)
   save_data(d); return self.send_json({'success':True,'user':rec})
  if action=='delete_uid':
   uid=uid_norm(p.get('uid')); before=len(d['users']); d['users']=[u for u in d['users'] if uid_norm(u.get('uid'))!=uid]; save_data(d); return self.send_json({'success':True,'deleted':before-len(d['users'])})
  if action=='reset_hwid':
   uid=uid_norm(p.get('uid')); u=next((x for x in d['users'] if uid_norm(x.get('uid'))==uid),None)
   if not u:return self.send_json({'success':False,'msg':'UID not found.'},404)
   u['hwid']='';u['updatedAt']=now_iso();save_data(d);return self.send_json({'success':True})
  if action in ('add_key','update_key'):
   key=str(p.get('key','')).strip().upper(); keys=d['keys']; ex=next((k for k in keys if str(k.get('key','')).upper()==key),None);now=now_iso()
   if len(key)<4:return self.send_json({'success':False,'msg':'Key is too short.'},400)
   rec={'key':key,'uid':str(p.get('uid') or 'KEY'),'plan':str(p.get('plan') or 'VIP KEY'),'expiresAt':str(p.get('expiresAt') or '').strip(),'status':'active' if p.get('active',True) else 'disabled','hwid':str(p.get('hwid') or (ex or {}).get('hwid','')).strip(),'createdAt':(ex or {}).get('createdAt',now),'updatedAt':now}
   if action=='add_key' and ex:return self.send_json({'success':False,'msg':'Key already exists.'},409)
   if ex:ex.update(rec)
   else:keys.append(rec)
   save_data(d);return self.send_json({'success':True,'key':rec})
  if action=='delete_key':
   key=str(p.get('key','')).strip().upper();before=len(d['keys']);d['keys']=[k for k in d['keys'] if str(k.get('key','')).upper()!=key];save_data(d);return self.send_json({'success':True,'deleted':before-len(d['keys'])})
  return self.send_json({'success':False,'msg':'Unknown action.'},400)

if __name__=='__main__':
 port=int(os.environ.get('PORT','5000')); print(f'MSD server listening on :{port}'); ThreadingHTTPServer(('0.0.0.0',port),Handler).serve_forever()
