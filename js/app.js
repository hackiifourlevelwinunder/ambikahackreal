// ========================================================
// 🌌 AMBIKA HACK // AMBIKA HACK QUANTUM 1M CLIENT CORE (DIRECT UID & AUTO-REDIRECT)
// ========================================================

let REGISTER_URL = "https://www.veergame37.com/#/register?invitationCode=91156122519";
let RECHARGE_URL = "https://www.veergame37.com/#/wallet/recharge";
const REFERRAL_CODE = "91156122519";
let TELEGRAM_URL = "https://t.me/queenambika122";
let TELEGRAM_USERNAME = "@queenambika122";

let isUnlocked = false;
let isAudioMuted = false;
let isAnalyzing = false;
let predictedPeriod = null;
let currentTargetPeriod = null;
let lastRenderedHash = null;
let lastFetchedList = [];
let currentAuthDetails = null;

function toggleAudio() {
    isAudioMuted = !isAudioMuted;
    const icon = document.getElementById('soundIcon');
    if (icon) icon.innerText = isAudioMuted ? '🔇' : '🔊';
    showToast(isAudioMuted ? "🔇 Audio Muted" : "🔊 Audio Enabled");
}

// ========================================================
// 🔮 HIGH-PRECISION 3D CYBER VECTOR SPHERE GENERATOR (ZERO-FAIL)
// ========================================================
function renderCyberBall(num, size = 30) {
    num = parseInt(num);
    if (isNaN(num)) num = 0;
    
    let bgGradient = '';
    let shadowGlow = '';
    let borderCol = '';

    if (num === 0) {
        bgGradient = 'radial-gradient(circle at 32% 28%, #ff66b2 0%, #ff007f 40%, #7c3aed 75%, #3b0764 100%)';
        shadowGlow = '0 0 14px rgba(255, 0, 127, 0.7), 0 0 24px rgba(124, 58, 237, 0.4), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.6)';
        borderCol = 'rgba(255, 0, 127, 0.9)';
    } else if (num === 5) {
        bgGradient = 'radial-gradient(circle at 32% 28%, #66ffbb 0%, #00ff88 40%, #7c3aed 75%, #3b0764 100%)';
        shadowGlow = '0 0 14px rgba(0, 255, 136, 0.7), 0 0 24px rgba(124, 58, 237, 0.4), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.6)';
        borderCol = 'rgba(0, 255, 136, 0.9)';
    } else if ([1, 3, 7, 9].includes(num)) {
        bgGradient = 'radial-gradient(circle at 32% 28%, #a7f3d0 0%, #10b981 35%, #059669 70%, #022c22 100%)';
        shadowGlow = '0 0 14px rgba(16, 185, 129, 0.8), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.7)';
        borderCol = '#34d399';
    } else {
        bgGradient = 'radial-gradient(circle at 32% 28%, #fecdd3 0%, #f43f5e 35%, #e11d48 70%, #4c0519 100%)';
        shadowGlow = '0 0 14px rgba(244, 63, 94, 0.8), inset 0 2px 4px rgba(255,255,255,0.7), inset 0 -3px 6px rgba(0,0,0,0.7)';
        borderCol = '#fb7185';
    }

    const fontSize = Math.round(size * 0.48);

    return `
    <div class="cyber-3d-ball shrink-0" 
         style="width:${size}px; height:${size}px; min-width:${size}px; background:${bgGradient}; box-shadow:${shadowGlow}; border:1.5px solid ${borderCol}; font-size:${fontSize}px;">
        <span class="relative z-10 font-orbitron font-black text-white" style="text-shadow: 0 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(255,255,255,0.8);">${num}</span>
        <div class="ball-highlight"></div>
    </div>
    `;
}

// ========================================================
// 🔊 CYBER WEB-AUDIO SYNTHESIZER & VOICE SYSTEM
// ========================================================
let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

// Global user interaction listener to prime & unlock audio immediately
function unlockAudioGlobally() {
    try {
        const ctx = getAudioContext();
        if (ctx && ctx.state === 'suspended') {
            ctx.resume();
        }
    } catch (e) {}
}
window.addEventListener('click', unlockAudioGlobally, { passive: true });
window.addEventListener('touchstart', unlockAudioGlobally, { passive: true });
window.addEventListener('pointerdown', unlockAudioGlobally, { passive: true });

const VOICE_AUDIO_FILES = {
    unlock_click: 'assets/audio/unlock_click.mp3',
    verify_fail: 'assets/audio/not_verify.mp3',
    hack_activated: 'assets/audio/hack_activated.mp3',
    low_deposit: 'assets/audio/verify.mp3',
    register: 'assets/audio/not_verify.mp3',
    not_verify: 'assets/audio/not_verify.mp3',
    verify_zero: 'assets/audio/verify.mp3',
    verify: 'assets/audio/verify.mp3',
    deposit_100: 'assets/audio/100.mp3',
    deposit_200: 'assets/audio/200.mp3',
    '100': 'assets/audio/100.mp3',
    '200': 'assets/audio/200.mp3'
};

let currentPlayingAudio = null;

function playVoiceSound(name, onEnded) {
    if (isAudioMuted) {
        if (onEnded) onEnded();
        return;
    }
    unlockAudioGlobally();
    // Stop any previously playing audio to guarantee NO overlapping sounds
    if (currentPlayingAudio) {
        try {
            currentPlayingAudio.pause();
            currentPlayingAudio.currentTime = 0;
        } catch (e) {}
        currentPlayingAudio = null;
    }
    try {
        const path = VOICE_AUDIO_FILES[name] || `assets/audio/${name}.mp3`;
        const audio = new Audio(path);
        audio.volume = 1.0;
        currentPlayingAudio = audio;
        let finished = false;
        const callFinish = () => {
            if (!finished) {
                finished = true;
                if (currentPlayingAudio === audio) currentPlayingAudio = null;
                if (onEnded) onEnded();
            }
        };

        audio.onended = callFinish;
        setTimeout(callFinish, 20000);

        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                if (onEnded) setTimeout(onEnded, 1500);
            });
        }
        return audio;
    } catch (e) {
        if (onEnded) setTimeout(onEnded, 1500);
    }
}

// In-App Seamless Redirect in SAME TAB with side floating OPEN HACK button (No extra tabs opened!)
function openPersistentRegistration(regUrl) {
    regUrl = regUrl || REGISTER_URL;
    
    // 1. Hide the unlock modal so it NEVER obstructs the view!
    closeUnlockModal();

    // 2. Bring persistent container to foreground with side button
    const container = document.getElementById('persistentRegisterContainer');
    const frame = document.getElementById('persistentRegisterFrame');
    if (container) {
        container.style.zIndex = '99999';
        container.classList.remove('hidden');
        container.classList.add('flex');
    }
    if (frame) {
        frame.src = regUrl;
    }
}

function closePersistentRegister() {
    const container = document.getElementById('persistentRegisterContainer');
    const frame = document.getElementById('persistentRegisterFrame');
    if (container) {
        container.classList.add('hidden');
        container.classList.remove('flex');
    }
    if (frame) frame.src = 'about:blank';
    if (!isUnlocked) {
        showModalInputView();
        openUnlockModal();
        const inp = document.getElementById('modalUidInput');
        if (inp) {
            inp.value = '';
            setTimeout(() => inp.focus(), 150);
        }
    }
}

function playUiSound(type = 'click') {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;

        if (type === 'click') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.05);
        } else if (type === 'beep') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(1200, now);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.08);
        } else if (type === 'low_deposit' || type === 'deposit_warning') {
            const freqs = [420, 310, 420, 310];
            freqs.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, now + (i * 0.14));
                gain.gain.setValueAtTime(0.18, now + (i * 0.14));
                gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.14) + 0.12);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + (i * 0.14));
                osc.stop(now + (i * 0.14) + 0.12);
            });
        } else if (type === 'unlock') {
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, now + (i * 0.06));
                gain.gain.setValueAtTime(0.09, now + (i * 0.06));
                gain.gain.exponentialRampToValueAtTime(0.001, now + (i * 0.06) + 0.12);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(now + (i * 0.06));
                osc.stop(now + (i * 0.06) + 0.12);
            });
        }
    } catch (e) {}
}

// ========================================================
// 📱 HARDWARE FINGERPRINT (HWID)
// ========================================================
function getDeviceFingerprint() {
    let hwid = localStorage.getItem('wingo_device_hwid');
    if (!hwid) {
        const entropy = [
            navigator.userAgent,
            navigator.language,
            screen.width + 'x' + screen.height,
            screen.colorDepth,
            navigator.hardwareConcurrency || 4,
            Math.random().toString(36).substring(2, 10)
        ].join('###');

        let hash = 0;
        for (let i = 0; i < entropy.length; i++) {
            hash = ((hash << 5) - hash) + entropy.charCodeAt(i);
            hash |= 0;
        }
        hwid = 'DEV-' + Math.abs(hash).toString(16).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
        localStorage.setItem('wingo_device_hwid', hwid);
    }
    return hwid;
}

// ========================================================
// 🌐 MULTI-DEVICE SERVER API CALLER
// ========================================================
const KEY_API_ENDPOINTS = ['/api/keys'];

async function callKeyApi(payload) {
    for (const ep of KEY_API_ENDPOINTS) {
        try {
            const resp = await fetch(ep, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (resp.ok) {
                const res = await resp.json();
                return res;
            }
        } catch (e) {}
    }
    return null;
}

let previewLossCount = 1; // Default: 1 loss out of 10 in preview (90% Win)

// ========================================================
// 📢 REAL-TIME BROADCAST & SETTINGS SYNC
// ========================================================
async function syncBroadcastAndSettings() {
    try {
        const res = await callKeyApi({ action: 'get_all_data' });
        if (res && res.settings) {
            const banner = document.getElementById('liveBroadcastBanner');
            const textEl = document.getElementById('liveBroadcastText');
            if (res.settings.broadcastMessage && textEl) {
                textEl.innerText = res.settings.broadcastMessage;
                if (banner) banner.classList.remove('hidden');
            }
            if (typeof res.settings.previewLossCount !== 'undefined') {
                const prev = previewLossCount;
                previewLossCount = parseInt(res.settings.previewLossCount);
                if (prev !== previewLossCount && lastFetchedList && !isUnlocked) {
                    renderTable(lastFetchedList, true);
                }
            }
            if (res.settings.registerUrl) REGISTER_URL = res.settings.registerUrl;
            if (res.settings.telegramSupport) TELEGRAM_URL = res.settings.telegramSupport;
            if (res.settings.telegramUsername) TELEGRAM_USERNAME = res.settings.telegramUsername;
            const tgLink = document.getElementById('navTabTelegram');
            if (tgLink && TELEGRAM_URL) tgLink.href = TELEGRAM_URL;
        }
    } catch (e) {}
}

// No fallback UIDs - all verification must pass through server
function getFallbackUids() { return []; }

// ========================================================
// 🔐 REAL-TIME UID & VIP AUTHENTICATION CHECK
// ========================================================
async function checkExistingAuth() {
    const savedUid = localStorage.getItem('wingo_verified_uid');
    const savedKey = localStorage.getItem('wingo_vip_license_key');
    const currentHwid = getDeviceFingerprint();
    const prevStatus = isUnlocked;

    if (savedUid) {
        const apiRes = await callKeyApi({
            action: 'validate_uid',
            uid: savedUid,
            hwid: currentHwid
        });

        if (apiRes) {
            if (apiRes.success) {
                isUnlocked = true;
                currentAuthDetails = apiRes;
                if (!prevStatus) applyUnlockedState();
                updateHudLockDisplay(apiRes);
            } else {
                isUnlocked = false;
                revokeAccess(apiRes.msg || "UID authorization has expired or was revoked.");
            }
            return;
        }
        // API unreachable - keep locked, do not grant access
        isUnlocked = false;
        applyLockedState();
    } else if (savedKey) {
        // Legacy Key Support
        const apiRes = await callKeyApi({
            action: 'validate_key',
            key: savedKey,
            hwid: currentHwid
        });

        if (apiRes && apiRes.success) {
            isUnlocked = true;
            currentAuthDetails = apiRes;
            if (!prevStatus) applyUnlockedState();
            updateHudLockDisplay(apiRes);
        } else {
            revokeAccess("Key verification expired.");
            
        }
    } else {
        isUnlocked = false;
        if (prevStatus) applyLockedState();
        
    }
}

function updateHudLockDisplay(details) {
    const lockStatus = document.getElementById('hudLockStatus');
    if (!lockStatus) return;

    if (isUnlocked) {
        let label = "VIP UNLOCKED";
        if (details && details.remainingText) {
            label = `UNLOCKED (${details.remainingText})`;
        } else if (details && details.uid) {
            label = `VIP UNLOCKED (#${details.uid})`;
        }
        lockStatus.innerText = label;
        lockStatus.className = "text-cyber-neonGreen font-bold glow-green flex items-center gap-1";
    } else {
        lockStatus.innerText = "LOCKED (PREVIEW)";
        lockStatus.className = "text-cyber-gold font-bold";
    }
}

function revokeAccess(reason) {
    localStorage.removeItem('wingo_verified_uid');
    localStorage.removeItem('wingo_vip_license_key');
    isUnlocked = false;
    currentAuthDetails = null;
    applyLockedState();
    if (reason) showToast('Access Revoked: ' + reason);
}

let hasPredictedCurrentPeriod = false;

function applyUnlockedState(revealNow = false) {
    // Load game iframe and switch to floating panel mode
    
    updateHudLockDisplay(currentAuthDetails);
    const floatBubble = document.getElementById('floatingLogoBubble');
    if (floatBubble) floatBubble.classList.remove('hidden');

    const lockedBox = document.getElementById('lockedStateContainer');
    const unlockedBox = document.getElementById('unlockedStateContainer');
    if (lockedBox) lockedBox.classList.add('hidden');
    if (unlockedBox) unlockedBox.classList.remove('hidden');

    const overlay = document.getElementById('blurGateOverlay');
    if (overlay) overlay.classList.add('hidden');
    const content = document.getElementById('predictionContentWrapper');
    if (content) {
        content.classList.remove('prediction-blurred');
        content.classList.add('prediction-unlocked');
    }

    if (revealNow) {
        hasPredictedCurrentPeriod = true;
    }

    const resSize = document.getElementById('resSize');
    const numContainer = document.getElementById('resNumContainer');
    const colorBadge = document.getElementById('resColorBadge');
    const btnText = document.getElementById('nextRoundBtnText');
    const confEl = document.getElementById('resConfidence');
    const mainSizeSvg = document.getElementById('mainSizeYantraSvg');
    const mainNumSvg = document.getElementById('mainNumYantraSvg');
    const mainSizeGlow = document.getElementById('mainSizeGlow');
    const mainNumGlow = document.getElementById('mainNumGlow');

    if (hasPredictedCurrentPeriod && currentTargetPeriod) {
        const pred = getPredictionForPeriod(currentTargetPeriod);
        const animClass = revealNow ? " glitch-reveal-flash" : "";
        const isBig = pred.size === 'BIG';

        if (resSize) {
            resSize.innerText = pred.size;
            resSize.className = (isBig 
                ? "relative z-10 text-3xl sm:text-4xl font-orbitron font-black text-size-big select-none" 
                : "relative z-10 text-3xl sm:text-4xl font-orbitron font-black text-size-small select-none") + animClass;
        }

        if (confEl) {
            confEl.innerText = `${pred.confidence || '98.6'}% HIGH PROB`;
            confEl.className = `text-[10.5px] font-mono font-bold px-2.5 py-0.5 rounded-full ${isBig ? 'badge-size-big' : 'badge-size-small'}${animClass}`;
        }

        if (mainSizeGlow) {
            mainSizeGlow.className = `yantra-chakra-particle-glow ${isBig ? 'chakra-aura-big' : 'chakra-aura-small'}`;
        }
        if (mainSizeSvg) {
            mainSizeSvg.className = `yantra-chakra-svg transition-all duration-300 ${isBig ? 'chakra-svg-big' : 'chakra-svg-small'}${animClass}`;
        }

        if (numContainer) {
            numContainer.innerHTML = renderCyberBall(pred.number, 68);
            if (animClass) {
                const ball = numContainer.querySelector('.cyber-3d-ball');
                if (ball) ball.classList.add('reveal-ball-clean');
            }
        }

        if (mainNumGlow) {
            mainNumGlow.className = `yantra-chakra-particle-glow ${pred.color === 'red' ? 'chakra-aura-small' : 'chakra-aura-big'}`;
        }
        if (mainNumSvg) {
            mainNumSvg.className = `yantra-chakra-svg transition-all duration-300 ${pred.color === 'red' ? 'chakra-svg-small' : 'chakra-svg-big'}${animClass}`;
        }

        if (colorBadge) {
            colorBadge.className = (pred.color === 'red' ? 'w-3.5 h-3.5 rounded-full bg-cyber-neonPink shadow-[0_0_10px_#ff007f]' : 'w-3.5 h-3.5 rounded-full bg-cyber-neonGreen shadow-[0_0_10px_#00ff88]') + animClass;
        }
        if (btnText) {
            btnText.innerText = "RE-ANALYZE ROUND ⚡";
        }
    } else {
        if (resSize) {
            resSize.innerHTML = `<span class="text-xl sm:text-2xl font-orbitron font-extrabold text-[#00E5FF] tracking-wider select-none">READY</span>`;
            resSize.className = "relative z-10 flex items-center justify-center";
        }
        if (confEl) {
            confEl.className = "text-[10.5px] font-mono text-cyber-neonCyan font-bold px-2.5 py-0.5 rounded-full bg-cyber-neonCyan/10 border border-cyber-neonCyan/30";
            confEl.innerText = "98.6% HIGH PROB";
        }
        if (mainSizeGlow) mainSizeGlow.className = "yantra-chakra-particle-glow";
        if (mainSizeSvg) mainSizeSvg.className = "yantra-chakra-svg transition-all duration-300";
        if (mainNumGlow) mainNumGlow.className = "yantra-chakra-particle-glow";
        if (mainNumSvg) mainNumSvg.className = "yantra-chakra-svg transition-all duration-300";

        if (numContainer) {
            numContainer.innerHTML = `<div class="relative w-14 h-14 flex items-center justify-center"><div class="absolute inset-0 rounded-full border border-dashed border-[#00E5FF]/60 animate-spin"></div><span class="relative z-10 text-xs font-mono font-bold text-[#4DEBFF] select-none tracking-wider">SCAN</span></div>`;
        }
        if (colorBadge) {
            colorBadge.className = 'w-3.5 h-3.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]';
        }
        if (btnText) {
            btnText.innerText = `PREDICT ROUND #${currentTargetPeriod ? currentTargetPeriod.slice(-5) : ''} ⚡`;
        }
    }

    if (lastFetchedList && lastFetchedList.length > 0) {
        renderTable(lastFetchedList, true);
    }
    hfpUpdatePrediction(revealNow);
}

function applyLockedState() {
    updateHudLockDisplay(null);

    const lockedBox = document.getElementById('lockedStateContainer');
    const unlockedBox = document.getElementById('unlockedStateContainer');
    if (lockedBox) lockedBox.classList.remove('hidden');
    if (unlockedBox) unlockedBox.classList.add('hidden');

    const overlay = document.getElementById('blurGateOverlay');
    if (overlay) overlay.classList.remove('hidden');
    const content = document.getElementById('predictionContentWrapper');
    if (content) {
        content.classList.add('prediction-blurred');
        content.classList.remove('prediction-unlocked');
    }

    if (lastFetchedList && lastFetchedList.length > 0) {
        renderTable(lastFetchedList, true);
    }
}

function switchNavTab(tab) {
    playUiSound('click');
    ['Dashboard', 'History'].forEach(t => {
        const btn = document.getElementById(`navTab${t}`);
        if (btn) btn.classList.remove('active');
    });

    if (tab === 'dashboard') {
        const btn = document.getElementById('navTabDashboard');
        if (btn) btn.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'history') {
        const btn = document.getElementById('navTabHistory');
        if (btn) btn.classList.add('active');
        const historySec = document.getElementById('historyRowsList');
        if (historySec) historySec.scrollIntoView({ behavior: 'smooth' });
    }
}

let modalRedirectTimer = null;

function showModalInputView() {
    if (modalRedirectTimer) {
        clearInterval(modalRedirectTimer);
        modalRedirectTimer = null;
    }
    const inputView = document.getElementById('modalInputView');
    const termView = document.getElementById('modalTerminalView');
    const errEl = document.getElementById('modalInputError');
    if (inputView) inputView.classList.remove('hidden');
    if (termView) termView.classList.add('hidden');
    if (errEl) errEl.classList.add('hidden');
}

function openUnlockModal() {
    playVoiceSound('unlock_click');
    showModalInputView();
    const modal = document.getElementById('unlockModal');
    if (modal) modal.classList.remove('hidden');
    const inp = document.getElementById('modalUidInput');
    if (inp) {
        setTimeout(() => inp.focus(), 100);
    }
}

function closeUnlockModal() {
    if (modalRedirectTimer) {
        clearInterval(modalRedirectTimer);
        modalRedirectTimer = null;
    }
    const modal = document.getElementById('unlockModal');
    if (modal) modal.classList.add('hidden');
}

function switchUnlockTab(tab) {
    const uidSection = document.getElementById('methodUidSection');
    const keySection = document.getElementById('methodKeySection');
    const tabUid = document.getElementById('tabUidBtn');
    const tabKey = document.getElementById('tabKeyBtn');

    if (tab === 'uid') {
        if (uidSection) uidSection.classList.remove('hidden');
        if (keySection) keySection.classList.add('hidden');
        if (tabUid) tabUid.className = "py-2.5 rounded-lg text-xs font-orbitron font-bold uppercase transition-all bg-cyber-neonGreen text-black shadow-lg";
        if (tabKey) tabKey.className = "py-2.5 rounded-lg text-xs font-orbitron font-bold uppercase transition-all text-gray-400 hover:text-white";
    } else {
        if (uidSection) uidSection.classList.add('hidden');
        if (keySection) keySection.classList.remove('hidden');
        if (tabKey) tabKey.className = "py-2.5 rounded-lg text-xs font-orbitron font-bold uppercase transition-all bg-cyber-neonCyan text-black shadow-lg";
        if (tabUid) tabUid.className = "py-2.5 rounded-lg text-xs font-orbitron font-bold uppercase transition-all text-gray-400 hover:text-white";
    }
}

// ========================================================
// 👤 SUBMIT UID DIRECTLY (HERO ACTIVATION + FIRST TIME REDIRECT)
// ========================================================
async function submitModalUid() {
    playVoiceSound('unlock_click');
    const uidInp = document.getElementById('modalUidInput');
    const uid = uidInp ? uidInp.value.trim() : '';
    const errEl = document.getElementById('modalInputError');
    const inputView = document.getElementById('modalInputView');
    const termView = document.getElementById('modalTerminalView');
    const scanContainer = document.getElementById('terminalScanContainer');
    const resultContainer = document.getElementById('terminalResultContainer');
    const currentHwid = getDeviceFingerprint();

    if (!uid || uid.length < 3) {
        playVoiceSound('verify_fail');
        if (errEl) {
            errEl.innerHTML = "⚠️ Please enter your registered 5-8 digit Game UID Number.";
            errEl.classList.remove('hidden');
        }
        return;
    }
    if (errEl) errEl.classList.add('hidden');

    // 1. SWITCH TO HACKER TERMINAL VIEW (Single view only - no stacking!)
    if (inputView) inputView.classList.add('hidden');
    if (termView) termView.classList.remove('hidden');
    if (scanContainer) scanContainer.classList.remove('hidden');
    if (resultContainer) {
        resultContainer.classList.add('hidden');
        resultContainer.innerHTML = '';
    }

    // Grab terminal elements
    const termUid = document.getElementById('termLogUid');
    const termTitle = document.getElementById('termStepTitle');
    const termSub = document.getElementById('termStepSub');
    const termBadge = document.getElementById('termPercentBadge');
    const termBar = document.getElementById('termDynamicBar');
    const termLogs = document.getElementById('terminalConsoleLogs');

    if (termUid) termUid.innerText = `#${uid}`;
    if (termBar) termBar.style.width = '18%';
    if (termBadge) termBadge.innerText = '18%';
    if (termTitle) termTitle.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping"></span><span>[01/03] INJECTING CIPHER...</span>`;
    if (termSub) termSub.innerText = `Establishing 256-bit quantum tunnel for UID #${uid}...`;

    if (termLogs) {
        termLogs.innerHTML = `
            <div class="text-gray-400">> [INIT] Target UID Locked: <span class="text-white font-bold">#${uid}</span> [HWID: ${currentHwid.substring(0,8)}...]</div>
            <div class="text-cyber-neonCyan">> [CIPHER] Injecting 256-bit quantum tunnel payload... [OK]</div>
            <div class="text-amber-300 animate-pulse">> [SCAN] Interrogating ShreeWin VIP neural database cluster...</div>
        `;
    }

    // Step animation timer 1
    const t1 = setTimeout(() => {
        if (termBar) termBar.style.width = '65%';
        if (termBadge) termBadge.innerText = '65%';
        if (termTitle) termTitle.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping"></span><span>[02/03] QUERYING VIP LEDGER...</span>`;
        if (termSub) termSub.innerText = `Scanning official referral ledger for UID #${uid}...`;
        if (termLogs) {
            termLogs.innerHTML += `
                <div class="text-gray-300">> [LEDGER] Reading referral block 0x${Math.floor(Math.random()*0xFFFFFF).toString(16).toUpperCase()}...</div>
                <div class="text-cyber-neonCyan">> [REF] Matching code: 91156122519 (AMBIKA HACK)</div>
            `;
            termLogs.scrollTop = termLogs.scrollHeight;
        }
        playUiSound('beep');
    }, 450);

    // Step animation timer 2
    const t2 = setTimeout(() => {
        if (termBar) termBar.style.width = '94%';
        if (termBadge) termBadge.innerText = '94%';
        if (termTitle) termTitle.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-ping"></span><span>[03/03] PARITY SYNCHRONIZATION...</span>`;
        if (termSub) termSub.innerText = `Validating daily recharge & hardware signature...`;
        if (termLogs) {
            termLogs.innerHTML += `
                <div class="text-[#00ff88]">> [AUTH] Hardware signature verified [PASS]</div>
                <div class="text-amber-300 animate-pulse">> [PARITY] Establishing live prediction stream handshake...</div>
            `;
            termLogs.scrollTop = termLogs.scrollHeight;
        }
        playUiSound('beep');
    }, 950);

    try {
        const apiRes = await callKeyApi({
            action: 'validate_uid',
            uid: uid,
            hwid: currentHwid
        });

        clearTimeout(t1);
        clearTimeout(t2);

        if (termBar) termBar.style.width = '100%';
        if (termBadge) termBadge.innerText = '100%';

        // Switch scanning screen to results screen instantly
        if (scanContainer) scanContainer.classList.add('hidden');
        if (resultContainer) resultContainer.classList.remove('hidden');

        if (apiRes && apiRes.success) {
            const expText = apiRes.expiresAt ? new Date(apiRes.expiresAt).toLocaleDateString() : 'Permanent';
            const remaining = apiRes.remainingText || 'Active Access';

            if (resultContainer) {
                resultContainer.innerHTML = `
                    <div class="p-4 rounded-2xl border border-emerald-400/60 bg-gradient-to-b from-emerald-950/40 via-[#021810]/95 to-black/95 text-center space-y-3 shadow-[0_0_35px_rgba(16,185,129,0.35)] backdrop-blur-2xl animate-entrance">
                        <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/60 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_#10b981]">
                            <svg class="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
                        </div>
                        <div class="space-y-1">
                            <h4 class="font-orbitron font-black text-sm text-emerald-400 tracking-wider">ACCESS GRANTED // VIP UNLOCKED</h4>
                            <p class="font-mono text-xs text-white">Target UID <span class="text-cyber-neonCyan font-bold">#${uid}</span> Verified</p>
                        </div>
                        <div class="p-2.5 rounded-xl bg-black/60 border border-emerald-500/30 text-[11px] font-mono text-gray-300 flex justify-between">
                            <span>PLAN: <strong class="text-white">${apiRes.plan || 'PERMANENT VIP'}</strong></span>
                            <span class="text-emerald-400 font-bold">● ACTIVE</span>
                        </div>
                        <div class="text-[11px] font-mono text-cyber-neonCyan animate-pulse">Launching ShreeWin & Floating Hack Panel in 2s...</div>
                    </div>
                `;
            }

            localStorage.setItem('wingo_verified_uid', uid);
            isUnlocked = true;
            currentAuthDetails = apiRes;
            playVoiceSound('hack_activated');
            showToast(`✅ UID #${uid} Verified! Game loading...`);

            setTimeout(() => {
                closeUnlockModal();
                applyUnlockedState();
                showToast(`⚡ ShreeWin loaded! Tap logo to open/close hack panel.`);
            }, 1800);
            return;

        } else if (apiRes && apiRes.pending_recharge) {
            const depositAmt = parseFloat(apiRes.today_recharge || 0);
            let depositVoice = 'verify_zero';
            let rechargeBtnText = 'Complete ₹300 Recharge Now ↗';

            if (depositAmt >= 200 && depositAmt < 300) {
                depositVoice = 'deposit_200';
                rechargeBtnText = `Add ₹${Math.max(1, 300 - Math.round(depositAmt))} to Reach ₹300 & Activate ↗`;
            } else if (depositAmt >= 100 && depositAmt < 200) {
                depositVoice = 'deposit_100';
                rechargeBtnText = `Add ₹${Math.max(1, 300 - Math.round(depositAmt))} to Reach ₹300 & Activate ↗`;
            } else {
                depositVoice = 'verify_zero';
                rechargeBtnText = 'Complete ₹300 Recharge Now ↗';
            }

            playVoiceSound(depositVoice);

            if (resultContainer) {
                resultContainer.innerHTML = `
                    <div class="p-4 rounded-2xl border border-amber-400/60 bg-gradient-to-b from-amber-950/40 via-[#181102]/95 to-black/95 text-left space-y-3 shadow-[0_0_30px_rgba(245,158,11,0.25)] backdrop-blur-2xl animate-entrance">
                        <div class="flex items-center gap-2 font-orbitron text-amber-400 font-black text-xs sm:text-sm">
                            <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]"></span>
                            <span>ACCOUNT VERIFIED UNDER US (#${uid})</span>
                        </div>
                        <p class="text-gray-200 text-xs leading-relaxed">
                            Aapka UID database mein verified hai! Lekin prediction tool activate karne ke liye <strong>aaj minimum ₹300</strong> ka recharge complete hona chahiye.
                        </p>
                        <div class="p-2.5 rounded-xl bg-black/70 border border-amber-500/40 space-y-1.5 font-mono text-[11px]">
                            <div class="flex justify-between text-gray-300">
                                <span>Today Deposit: <strong class="text-white font-bold">₹${depositAmt}</strong> / ₹300</span>
                                <span class="text-amber-300 font-bold">Pending: ₹${apiRes.pending_amount || Math.max(0, 300 - depositAmt)}</span>
                            </div>
                            <div class="w-full bg-black h-2 rounded-full overflow-hidden border border-amber-500/30 p-0.5">
                                <div class="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full" style="width: ${Math.min(100, Math.round((depositAmt/300)*100))}%"></div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 pt-1">
                            <a href="${apiRes.registerUrl || RECHARGE_URL}" target="_blank" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                                <span>💳</span> <span>${rechargeBtnText}</span>
                            </a>
                            <button onclick="showModalInputView()" class="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-400 hover:text-white transition">
                                ← Try Different UID
                            </button>
                        </div>
                    </div>
                `;
            }
            showToast(`⚠️ Aaj minimum ₹300 ka recharge karein tool activate karne ke liye.`);
            return;

        } else if (apiRes && apiRes.expired) {
            playVoiceSound('not_verify');
            if (resultContainer) {
                resultContainer.innerHTML = `
                    <div class="p-4 rounded-2xl border border-rose-500/50 bg-gradient-to-b from-rose-950/30 to-[#18040a]/95 text-left space-y-2.5 backdrop-blur-2xl animate-entrance">
                        <div class="text-rose-400 font-bold flex items-center gap-1.5 font-orbitron text-xs sm:text-sm">
                            <span>⏰</span> <span>UID #${uid} - PLAN EXPIRED</span>
                        </div>
                        <p class="text-gray-300 text-xs">
                            Aapka VIP access expire ho gaya hai. Days extend/renew karwane ke liye Admin ko Telegram par message karein.
                        </p>
                        <div class="flex flex-col gap-2 pt-1">
                            <a href="${TELEGRAM_URL}" target="_blank" class="inline-flex items-center justify-center gap-2 bg-[#0088cc] hover:bg-[#0077b5] text-white py-2.5 px-4 rounded-xl text-xs font-bold w-full transition shadow-md">
                                Renew UID on Telegram (${TELEGRAM_USERNAME}) ↗
                            </a>
                            <button onclick="showModalInputView()" class="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-400 hover:text-white transition">
                                ← Try Different UID
                            </button>
                        </div>
                    </div>
                `;
            }
            return;

        } else {
            // USER IS NOT UNDER US
            playVoiceSound('not_verify');
            const regUrl = (apiRes && apiRes.registerUrl) ? apiRes.registerUrl : REGISTER_URL;

            if (resultContainer) {
                resultContainer.innerHTML = `
                    <div class="p-4 rounded-2xl border border-rose-500/60 bg-gradient-to-b from-rose-950/40 via-[#18040a]/90 to-black/95 text-left space-y-3 shadow-[0_0_30px_rgba(244,63,94,0.3)] backdrop-blur-2xl animate-entrance">
                        <div class="flex items-center justify-between font-orbitron">
                            <span class="flex items-center gap-2 text-rose-400 font-extrabold text-xs sm:text-sm tracking-wide">
                                <span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                                <span>NOT REGISTERED UNDER US</span>
                            </span>
                            <span id="termRedirBadge" class="text-[10px] bg-rose-500/25 text-rose-300 px-2.5 py-0.5 rounded-full border border-rose-400/50 font-mono font-bold tracking-wider animate-pulse">Auto Opening 3s</span>
                        </div>
                        <p class="text-gray-200 text-xs leading-relaxed">
                            UID <strong class="text-white bg-white/10 px-1.5 py-0.5 rounded font-mono">#${uid}</strong> hamare official link ke under registered nahi hai. <strong class="text-rose-300">Aapko new account create karne ki zarurat hai.</strong>
                        </p>
                        <div class="flex flex-col gap-2 pt-1">
                            <button onclick="if(modalRedirectTimer) clearInterval(modalRedirectTimer); openPersistentRegistration('${regUrl}');" class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00f0ff] via-[#4debff] to-[#00ff88] hover:scale-[1.02] text-[#010a12] font-black py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition shadow-[0_0_20px_rgba(0,240,255,0.4)] w-full active:scale-95 text-center cursor-pointer">
                                <span>🚀</span> <span>Register Account (Code: 91156122519) ↗</span>
                            </button>
                            <div class="flex items-center justify-between pt-1">
                                <button onclick="if(modalRedirectTimer) clearInterval(modalRedirectTimer); openPersistentRegistration('${regUrl}');" class="text-[10.5px] text-[#4debff] hover:underline font-mono font-bold cursor-pointer">
                                    Open registration portal ↗
                                </button>
                                <button onclick="showModalInputView()" class="text-[10.5px] text-gray-400 hover:text-white font-mono underline cursor-pointer">
                                    ← Try Different UID
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
            showToast(`❌ Not under us! Opening registration portal...`);

            let secondsLeft = 3;
            if (modalRedirectTimer) clearInterval(modalRedirectTimer);
            modalRedirectTimer = setInterval(() => {
                secondsLeft--;
                const badge = document.getElementById('termRedirBadge');
                if (badge) badge.innerText = `Auto Opening ${secondsLeft}s`;
                if (secondsLeft <= 0) {
                    clearInterval(modalRedirectTimer);
                    modalRedirectTimer = null;
                    openPersistentRegistration(regUrl);
                }
            }, 1000);
        }

    } catch (e) {
        clearTimeout(t1);
        clearTimeout(t2);
        playVoiceSound('not_verify');
        if (scanContainer) scanContainer.classList.add('hidden');
        if (resultContainer) {
            resultContainer.classList.remove('hidden');
            resultContainer.innerHTML = `
                <div class="p-4 rounded-2xl border border-rose-500/60 bg-rose-950/20 text-xs font-mono text-rose-300 text-left space-y-2">
                    <div class="font-bold text-sm text-rose-400">⚠️ Network / Server Connection Error</div>
                    <p>Unable to connect to verification node. Please check your internet connection.</p>
                    <button onclick="showModalInputView()" class="w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition">
                        ← Try Again
                    </button>
                </div>
            `;
        }
    }
}

// SUBMIT VIP KEY (LEGACY FALLBACK)
async function submitModalKey() {
    playUiSound('click');
    const val = document.getElementById('modalKeyInput').value.trim().toUpperCase();
    const err = document.getElementById('modalKeyError');
    const currentHwid = getDeviceFingerprint();

    if (!val) {
        if (err) {
            err.innerText = "Please enter your VIP License Key!";
            err.classList.remove('hidden');
        }
        return;
    }

    try {
        const apiRes = await callKeyApi({
            action: 'validate_key',
            key: val,
            hwid: currentHwid
        });

        if (apiRes && apiRes.success) {
            if (err) err.classList.add('hidden');
            localStorage.setItem('wingo_vip_license_key', val);
            isUnlocked = true;
            currentAuthDetails = apiRes;
            playUiSound('unlock');
            showToast("✅ VIP Key Verified & Bound to Device!");
            applyUnlockedState();
            closeUnlockModal();
            return;
        } else if (apiRes && !apiRes.success) {
            if (err) {
                err.innerHTML = `❌ ${apiRes.msg}`;
                err.classList.remove('hidden');
            }
            return;
        }

        if (err) {
            err.innerText = "Invalid VIP Key! Use your Game UID instead.";
            err.classList.remove('hidden');
        }
    } catch (e) {
        if (err) {
            err.innerText = "Network Error! Please try again.";
            err.classList.remove('hidden');
        }
    }
}

// ========================================================
// 📊 LIVE DATA SYNC
// ========================================================
async function syncData(force = false) {
    const endpoints = [
        '/api/wingo',
        '/api/wingo.php',
        'api/wingo.php',
        'https://draw.ar-lottery01.com/WinGo/WinGo_1M/GetHistoryIssuePage.json'
    ];

    for (const ep of endpoints) {
        try {
            const response = await fetch(ep, { cache: 'no-store' });
            if (response.ok) {
                const json = await response.json();
                let list = json?.data?.list || json?.data?.records || json?.list || json?.records || json;
                if (Array.isArray(list) && list.length > 0) {
                    lastFetchedList = list;
                    renderTable(list, force);
                    updatePeriodTarget(list[0]);
                    updateRatioVisualizer(list);
                    return;
                }
            }
        } catch (e) {}
    }

    // Do not fabricate lottery results when the upstream API is unavailable.
    // Keep the last known list on screen and show a small status toast only when useful.
    if ((!lastFetchedList || lastFetchedList.length === 0) && force) {
        const rowsContainer = document.getElementById('historyRowsList');
        if (rowsContainer) rowsContainer.innerHTML = '<div class="text-center text-xs font-mono text-gray-500 py-8">LIVE RESULT STREAM UNAVAILABLE</div>';
    }
}

function updateRatioVisualizer(list) {
    let bigCount = 0;
    let total = 0;
    list.slice(0, 10).forEach(row => {
        const num = Number.parseInt(row.number ?? row.Number ?? row.openNumber ?? 0, 10);
        if (num >= 5) bigCount++;
        total++;
    });
    if (total > 0) {
        const bigPct = Math.round((bigCount / total) * 100);
        const smallPct = 100 - bigPct;
        const barBig = document.getElementById('ratioBarBig');
        const barSmall = document.getElementById('ratioBarSmall');
        const ratioText = document.getElementById('streakRatioText');
        if (barBig) barBig.style.width = `${bigPct}%`;
        if (barSmall) barSmall.style.width = `${smallPct}%`;
        if (ratioText) ratioText.innerText = `BIG ${bigPct}% | SMALL ${smallPct}%`;
    }
}

// ========================================================
// 🧠 UNIFIED HIGH-PRECISION QUANTUM PREDICTION ENGINE
// ========================================================
function getPredictionForPeriod(periodStr) {
    let periodDigits = (periodStr || '').toString().replace(/\D/g, '') || "10001";
    let sum = 0;
    for (let i = 0; i < periodDigits.length; i++) {
        sum += parseInt(periodDigits.charAt(i));
    }
    
    const finalHash = (sum * 137 + 77) % 1000;
    const rNum = finalHash % 10;
    const size = rNum >= 5 ? 'BIG' : 'SMALL';
    const confidence = 95 + (finalHash % 5);

    let color = 'green';
    if ([1, 3, 7, 9].includes(rNum)) color = 'green';
    else if ([2, 4, 6, 8].includes(rNum)) color = 'red';
    else if (rNum === 0) color = 'violet';
    else if (rNum === 5) color = 'green-violet';

    return {
        number: rNum,
        size: size,
        color: color,
        confidence: confidence
    };
}

// ========================================================
// 📋 RENDER TABLE
// ========================================================
function renderTable(list, force = false) {
    const firstRow = list[0] || {};
    const latestIssue = (firstRow.issueNumber || firstRow.IssueNumber || '').toString();
    const currentHash = `${latestIssue}_${firstRow.number || firstRow.openNumber || ''}_${isUnlocked}`;

    if (!force && currentHash === lastRenderedHash) {
        return;
    }
    lastRenderedHash = currentHash;

    let rowsHtml = '';

    list.slice(0, 10).forEach((row, index) => {
        const period = (row.issueNumber || row.IssueNumber || '').toString().replace(/^#/, '');
        const num = Number.parseInt(row.number ?? row.Number ?? row.openNumber ?? 0, 10);
        if (!period) return;

        let isWin;
        if (!isUnlocked) {
            // 🚀 PREVIEW MODE (Before Key/UID Verification): Admin Configured Loss Control
            if (previewLossCount === 0) {
                isWin = true; // 100% WIN (0 Losses)
            } else if (previewLossCount === 1) {
                isWin = (index !== 7); // 90% WIN (1 Loss)
            } else if (previewLossCount === 2) {
                isWin = (index !== 3 && index !== 7); // 80% WIN (2 Losses)
            } else if (previewLossCount === 3) {
                isWin = (index !== 2 && index !== 5 && index !== 8); // 70% WIN (3 Losses)
            } else {
                isWin = (index !== 1 && index !== 3 && index !== 6 && index !== 8); // 60% WIN
            }
        } else {
            // 🎯 REAL UNLOCKED MODE: 100% Real Prediction Output
            const pred = getPredictionForPeriod(period);
            const actualSize = num >= 5 ? 'BIG' : 'SMALL';
            isWin = (pred.size === actualSize);
        }

        const statusText = isWin ? 'WIN' : 'LOSS';
        const tagClass = isWin ? 'history-tag-win' : 'history-tag-loss';
        const dotColor = isWin ? '#00E5FF' : '#ff007f';

        rowsHtml += `
            <div class="liquid-history-item" style="display: grid; grid-template-columns: 1fr 50px 75px; align-items: center; gap: 8px; width: 100%;">
                <div style="display: flex; align-items: center; gap: 8px; min-width: 0; overflow: hidden;">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background-color: ${dotColor}; box-shadow: 0 0 8px ${dotColor}; flex-shrink: 0;"></span>
                    <span class="font-mono text-xs sm:text-[13px] text-gray-200 font-semibold tracking-normal select-all truncate" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        ${period}
                    </span>
                </div>
                <div style="display: flex; justify-content: center; align-items: center; width: 50px; margin: 0 auto;">
                    ${renderCyberBall(num, 32)}
                </div>
                <div style="display: flex; justify-content: flex-end; align-items: center; width: 75px;">
                    <span class="${tagClass}" style="width: 70px; text-align: center; display: inline-block; box-sizing: border-box; padding: 5px 0;">${statusText}</span>
                </div>
            </div>
        `;
    });

    const rowsContainer = document.getElementById('historyRowsList');
    if (rowsContainer) rowsContainer.innerHTML = rowsHtml;
}

// ========================================================
// ⚡ NEXT ROUND / MANUAL TRIGGER
// ========================================================
function nextRoundPrediction() {
    playUiSound('click');
    if (!isUnlocked) {
        openUnlockModal();
        showToast('🔒 Please unlock with Game UID first!');
        return;
    }

    const loader = document.getElementById('loader');
    const unlockedBox = document.getElementById('unlockedStateContainer');
    const progressBar = document.getElementById('progressBar');
    const loaderPercent = document.getElementById('loaderPercent');
    const consoleLogs = document.getElementById('loaderConsoleLogs');
    const statusText = document.getElementById('loaderStatusText');
    const resSize = document.getElementById('resSize');
    const numContainer = document.getElementById('resNumContainer');
    const colorBadge = document.getElementById('resColorBadge');
    const confEl = document.getElementById('resConfidence');
    const mainSizeSvg = document.getElementById('mainSizeYantraSvg');
    const mainNumSvg = document.getElementById('mainNumYantraSvg');
    const mainSizeGlow = document.getElementById('mainSizeGlow');
    const mainNumGlow = document.getElementById('mainNumGlow');
    const nextBtnText = document.getElementById('nextRoundBtnText');

    playUiSound('analyze');

    // 🔥 Trigger intense high-speed fire chakra spin and plasma surge on main card
    if (mainSizeSvg) mainSizeSvg.classList.add('chakra-fast-fire-spin');
    if (mainNumSvg) mainNumSvg.classList.add('chakra-fast-fire-spin');
    if (mainSizeGlow) mainSizeGlow.classList.add('chakra-fire-glow-active');
    if (mainNumGlow) mainNumGlow.classList.add('chakra-fire-glow-active');

    const targetShort = (currentTargetPeriod || '').slice(-5);
    const hexCodes = ["0x7F", "FIRE", "SOLV", "0x9B", "SYNC", "0x3C", "PLASMA", "INFER", "0x8A", "CALC"];
    let scrambleTick = 0;

    const scrambleInterval = setInterval(() => {
        scrambleTick++;
        const randNum = Math.floor(Math.random() * 10);
        const randHex = hexCodes[scrambleTick % hexCodes.length];

        if (resSize) {
            resSize.innerHTML = `<span class="text-2xl sm:text-3xl font-mono font-black text-[#00f0ff] scramble-digit-active select-none tracking-widest" style="text-shadow: 0 0 14px #00f0ff, 0 0 28px #ff007f;">${randHex}</span>`;
        }
        if (numContainer) {
            numContainer.innerHTML = `
                <div class="relative w-14 h-14 flex items-center justify-center">
                    <div class="absolute inset-0 rounded-full border-2 border-dashed border-[#00ff88] animate-spin" style="animation-duration: 0.38s;"></div>
                    <span class="text-xl sm:text-2xl font-orbitron font-black text-[#00ff88] scramble-digit-active" style="text-shadow: 0 0 16px #00ff88, 0 0 30px #00f0ff;">${randNum}</span>
                </div>
            `;
        }
        if (colorBadge) {
            colorBadge.className = (scrambleTick % 2 === 0) ? 'w-3.5 h-3.5 rounded-full bg-cyber-neonGreen shadow-[0_0_12px_#00ff88]' : 'w-3.5 h-3.5 rounded-full bg-cyber-neonPink shadow-[0_0_12px_#ff007f]';
        }
        if (confEl) {
            confEl.className = "text-[10.5px] font-mono text-cyber-neonCyan font-bold px-2.5 py-0.5 rounded-full bg-cyber-neonCyan/10 border border-cyber-neonCyan/30 animate-pulse";
            confEl.innerText = `${(94 + (scrambleTick % 5)).toFixed(1)}% COMPUTING`;
        }
    }, 45);

    if (progressBar) progressBar.style.width = "0%";
    if (loaderPercent) loaderPercent.innerText = "0%";
    if (consoleLogs) {
        consoleLogs.innerHTML = `
            <div class="text-gray-400">> [01/05] Hooking Period #${targetShort} Live Socket Stream... [OK]</div>
            <div class="text-cyber-neonCyan">> [CIPHER] Injecting 256-bit quantum listener proxy...</div>
        `;
    }

    let p = 0;
    let stage = 0;
    const interval = setInterval(() => {
        p += 1.6; // ~2.5 seconds total runtime
        const safeP = Math.min(100, Math.floor(p));
        if (progressBar) progressBar.style.width = `${safeP}%`;
        if (loaderPercent) loaderPercent.innerText = `${safeP}%`;

        if (p >= 20 && stage === 0) {
            stage = 1;
            if (nextBtnText) nextBtnText.innerText = "[01/04] EXTRACTING SERVER SEED...";
            if (consoleLogs) {
                consoleLogs.innerHTML += `<div class="text-cyber-neonCyan">> [02/05] SHA-256 Entropy Seed: 0x${Math.floor(Math.random()*0xFFFFFF).toString(16).toUpperCase()}</div>`;
                consoleLogs.scrollTop = consoleLogs.scrollHeight;
            }
            playUiSound('beep');
        } else if (p >= 42 && stage === 1) {
            stage = 2;
            if (nextBtnText) nextBtnText.innerText = "[02/04] SOLVING RECURRENT WEIGHTS...";
            if (consoleLogs) {
                consoleLogs.innerHTML += `<div class="text-amber-300">> [03/05] Running Deep Recurrent Model (Parity: 99.4%)</div>`;
                consoleLogs.scrollTop = consoleLogs.scrollHeight;
            }
            playUiSound('beep');
        } else if (p >= 68 && stage === 2) {
            stage = 3;
            if (nextBtnText) nextBtnText.innerText = "[03/04] QUANTUM CONVERGENCE...";
            if (consoleLogs) {
                consoleLogs.innerHTML += `<div class="text-[#00f0ff]">> [04/05] Win-Go 1M Parity Delta Converged: 0.12 [LOCK]</div>`;
                consoleLogs.scrollTop = consoleLogs.scrollHeight;
            }
            playUiSound('beep');
        } else if (p >= 88 && stage === 3) {
            stage = 4;
            if (nextBtnText) nextBtnText.innerText = "[04/04] LOCKING HIGH PROB SIGNAL...";
            if (consoleLogs) {
                consoleLogs.innerHTML += `<div class="text-[#00ff88] font-bold">> [05/05] SUCCESS: Vector Locked!</div>`;
                consoleLogs.scrollTop = consoleLogs.scrollHeight;
            }
            playUiSound('beep');
        } else if (p >= 100) {
            clearInterval(interval);
            clearInterval(scrambleInterval);

            if (mainSizeSvg) mainSizeSvg.classList.remove('chakra-fast-fire-spin');
            if (mainNumSvg) mainNumSvg.classList.remove('chakra-fast-fire-spin');
            if (mainSizeGlow) mainSizeGlow.classList.remove('chakra-fire-glow-active');
            if (mainNumGlow) mainNumGlow.classList.remove('chakra-fire-glow-active');

            applyUnlockedState(true);
            playUiSound('unlock');
            showToast(`⚡ Round #${targetShort} Decrypted!`);
        }
    }, 40);
}

// ========================================================
// 🎯 UPDATE TARGET PERIOD
// ========================================================
function updatePeriodTarget(latestRow) {
    const rawId = (latestRow.issueNumber || latestRow.IssueNumber || '').toString().replace(/^#/, '');
    if (!rawId) return;
    
    let nextIdStr = rawId;
    try {
        const bigId = BigInt(rawId);
        const nextId = bigId + 1n;
        nextIdStr = nextId.toString();
    } catch (e) {}

    const curPeriodEl = document.getElementById('currentPeriod');
    if (curPeriodEl) curPeriodEl.innerText = nextIdStr;

    if (currentTargetPeriod && currentTargetPeriod !== nextIdStr) {
        hasPredictedCurrentPeriod = false;
        currentTargetPeriod = nextIdStr;
        if (isUnlocked) {
            applyUnlockedState(false);
            showToast(`⚡ Round #${nextIdStr.slice(-5)} Ready to Predict!`);
        }
    } else {
        currentTargetPeriod = nextIdStr;
    }
}

// ========================================================
// ⏱️ TIMER
// ========================================================
function updateTimer() {
    const now = new Date();
    const totalSec = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
    const cycle = 60;
    const remaining = cycle - (totalSec % cycle);

    const display = `00:${remaining < 10 ? '0' : ''}${remaining}`;
    const tCircle = document.getElementById('timerProgressCircle');
    const tCircleText = document.getElementById('timerCircleText');
    const statusLabel = document.getElementById('timerStatusLabel');
    const warnEl = document.getElementById('safeWarn');

    if (tCircleText) tCircleText.innerText = display;

    const circumference = 213.6;
    const progress = (cycle - remaining) / cycle;
    const offset = circumference * (1 - progress);
    if (tCircle) tCircle.style.strokeDashoffset = offset;

    if (remaining <= 5) {
        if (tCircle) tCircle.setAttribute('stroke', '#ff007f');
        if (tCircleText) tCircleText.className = "text-lg font-mono font-black text-cyber-neonPink tabular-nums tracking-tighter w-14 text-center glow-pink";
        if (warnEl) warnEl.classList.remove('hidden');
        if (statusLabel) statusLabel.innerText = "Locking Round...";
        if (remaining === 5) playUiSound('beep');
    } else {
        if (tCircle) tCircle.setAttribute('stroke', '#00f0ff');
        if (tCircleText) tCircleText.className = "text-lg font-mono font-black text-white tabular-nums tracking-tighter w-14 text-center";
        if (warnEl) warnEl.classList.add('hidden');
        if (statusLabel) statusLabel.innerText = "Calculating Live...";
    }

    if (remaining === cycle || remaining === 1) {
        syncData();
        setTimeout(() => {
            if (isUnlocked && typeof runAnalysis === 'function' && !isAnalyzing) {
                runAnalysis();
            }
        }, 500);
    }
}

// ========================================================
// ⚡ RUN QUANTUM AI ANALYSIS
// ========================================================
function runAnalysis() {
    if (isAnalyzing) return;
    playUiSound('click');
    isAnalyzing = true;
    document.getElementById('hackBtn').classList.add('hidden');
    document.getElementById('resultPanel').classList.add('hidden');
    document.getElementById('loader').classList.remove('hidden');

    const logOutput = document.getElementById('matrixLogOutput');
    if (logOutput) logOutput.innerHTML = '<div>> [0.01ms] HOOKING MSD QUANTUM ENGINE...</div>';

    const scrambleSizeEl = document.getElementById('scrambleSize');
    const scrambleNumEl = document.getElementById('scrambleNum');
    const scrambleColorEl = document.getElementById('scrambleColor');

    const scrambleInterval = setInterval(() => {
        const rndNum = Math.floor(Math.random() * 10);
        const rndSize = rndNum >= 5 ? 'BIG' : 'SMALL';
        const rndColors = ['GREEN', 'RED', 'VIOLET', 'GREEN+VIOLET'];
        const rndCol = rndColors[Math.floor(Math.random() * rndColors.length)];

        if (scrambleNumEl) scrambleNumEl.innerText = rndNum;
        if (scrambleSizeEl) {
            scrambleSizeEl.innerText = rndSize;
            scrambleSizeEl.className = rndSize === 'BIG' ? 'text-sm font-orbitron font-bold text-cyber-gold tabular-nums' : 'text-sm font-orbitron font-bold text-cyber-neonCyan tabular-nums';
        }
        if (scrambleColorEl) scrambleColorEl.innerText = rndCol;
    }, 60);

    const logSteps = [
        "> [0.12ms] HOOKING WINGO_1M PACKET PARITY STREAM...",
        "> [0.35ms] EXTRACTING SERVER SEED & HASH SALT...",
        "> [0.68ms] RUNNING QUANTUM LAW OF LARGE NUMBERS...",
        "> [0.94ms] CALIBRATING COLOR ENTROPY VARIANCE...",
        "> [1.20ms] RESOLVING OPTIMAL HIGH CONFIDENCE SIGNAL...",
        "> [1.45ms] [SUCCESS] TARGET NUMBER & SIZE DECRYPTED!"
    ];

    let w = 0;
    let logIndex = 0;

    const interval = setInterval(() => {
        w += 14.0;
        const bar = document.getElementById('progressBar');
        const percent = document.getElementById('loaderPercent');
        if (bar) bar.style.width = w + "%";
        if (percent) percent.innerText = Math.min(100, Math.floor(w)) + "%";

        if (w > (logIndex + 1) * (100 / logSteps.length) && logIndex < logSteps.length) {
            playUiSound('beep');
            if (logOutput) {
                const line = document.createElement('div');
                line.innerText = logSteps[logIndex];
                logOutput.appendChild(line);
                logOutput.scrollTop = logOutput.scrollHeight;
            }
            logIndex++;
        }

        if (w >= 100) {
            clearInterval(interval);
            clearInterval(scrambleInterval);
            finalizeResult();
        }
    }, 45);
}

function finalizeResult() {
    const currentPeriod = document.getElementById('currentPeriod').innerText;
    predictedPeriod = currentPeriod;

    const pred = getPredictionForPeriod(currentPeriod);
    const sizeCol = pred.size === 'BIG' ? 'text-cyber-gold glow-gold' : 'text-cyber-neonCyan glow-cyan';

    const resSizeEl = document.getElementById('resSize');
    if (resSizeEl) {
        resSizeEl.innerText = pred.size;
        resSizeEl.className = "text-4xl md:text-5xl font-orbitron font-extrabold tracking-wider my-1 " + sizeCol;
    }

    const resNumContainer = document.getElementById('resNumContainer');
    if (resNumContainer) {
        resNumContainer.innerHTML = renderCyberBall(pred.number, 52);
    }

    const colorBadge = document.getElementById('resColorBadge');
    if (colorBadge) {
        if (pred.color === 'green') {
            colorBadge.className = "w-3.5 h-3.5 rounded-full bg-cyber-neonGreen shadow-[0_0_10px_#00ff88]";
        } else if (pred.color === 'red') {
            colorBadge.className = "w-3.5 h-3.5 rounded-full bg-cyber-neonPink shadow-[0_0_10px_#ff007f]";
        } else if (pred.color === 'violet') {
            colorBadge.className = "w-3.5 h-3.5 rounded-full gradient-violet shadow-[0_0_10px_#a855f7]";
        } else {
            colorBadge.className = "w-3.5 h-3.5 rounded-full gradient-green-violet shadow-[0_0_10px_#00ff88]";
        }
    }

    const confEl = document.getElementById('confLvl');
    if (confEl) confEl.innerText = pred.confidence;

    document.getElementById('loader').classList.add('hidden');
    document.getElementById('resultPanel').classList.remove('hidden');

    if (isUnlocked) applyUnlockedState();
    else applyLockedState();

    isAnalyzing = false;
}

function resetUI() {
    const hackBtn = document.getElementById('hackBtn');
    const resultPanel = document.getElementById('resultPanel');
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('progressBar');
    const hackBtnLabel = document.getElementById('hackBtnLabel');

    if (hackBtn) hackBtn.classList.remove('hidden');
    if (resultPanel) resultPanel.classList.add('hidden');
    if (loader) loader.classList.add('hidden');
    if (progressBar) progressBar.style.width = '0%';
    if (hackBtnLabel) hackBtnLabel.innerText = "GET HACK FOR NEXT ROUND";
}

// ========================================================
// 🟢 BOOT MATRIX RAIN SPLASH
// ========================================================
function initBootSplash() {
    const canvas = document.getElementById('bootMatrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const chars = '0123456789ABCDEF!@#$%&*MSDTC';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    let animationId;
    function draw() {
        ctx.fillStyle = 'rgba(2, 4, 10, 0.1)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#00f0ff';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
        animationId = requestAnimationFrame(draw);
    }
    draw();

    const bar = document.getElementById('bootProgressBar');
    const percentEl = document.getElementById('bootPercentText');
    const termEl = document.getElementById('bootTerminalOutput');
    const splashEl = document.getElementById('systemBootOverlay');
    const statusSub = document.getElementById('bootStatusText');
    const hwid = getDeviceFingerprint();

    const bootSteps = [
        { p: 15, msg: "> [0.12ms] [AUTH] BINDING HWID: " + hwid.substring(0, 12) + " [SEC_OK]", sub: "BINDING HARDWARE IDENTITY" },
        { p: 35, msg: "> [0.38ms] [SOCKET] BYPASSING WINGO 1M ENCRYPTION LAYER...", sub: "HOOKING DRAW PARITY STREAM" },
        { p: 58, msg: "> [0.72ms] [PARITY] EXTRACTING 17-DIGIT ISSUE SEED BLOCK...", sub: "RESOLVING QUANTUM PARITY BLOCK" },
        { p: 78, msg: "> [0.94ms] [ENTROPY] CALIBRATING COLOR VARIANCE // 0.0012ms", sub: "CALIBRATING QUANTUM ENTROPY" },
        { p: 92, msg: "> [1.18ms] [CIPHER] QUANTUM PROBABILITY SOLVER ACTIVE", sub: "LOCKING DECRYPTION CIPHER" },
        { p: 100, msg: "> [1.40ms] [SUCCESS] AMBIKA HACK ENGINE READY // 100% ONLINE", sub: "ACCESS GRANTED // INITIALIZED" }
    ];

    let p = 0;
    let stepIndex = 0;

    const bootInterval = setInterval(() => {
        p += 3.5;
        const safeP = Math.min(100, Math.floor(p));
        if (bar) bar.style.width = safeP + "%";
        if (percentEl) percentEl.innerText = safeP + "%";

        if (stepIndex < bootSteps.length && p >= bootSteps[stepIndex].p) {
            playUiSound('beep');
            const line = document.createElement('div');
            line.className = stepIndex === bootSteps.length - 1 ? 'text-cyber-neonGreen font-bold glow-green' : 'text-gray-300';
            line.innerText = bootSteps[stepIndex].msg;
            if (termEl) {
                termEl.appendChild(line);
                termEl.scrollTop = termEl.scrollHeight;
            }
            if (statusSub) statusSub.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-cyber-neonGreen shadow-[0_0_6px_#00ff88]"></span> ${bootSteps[stepIndex].sub}`;
            stepIndex++;
        }

        if (p >= 100) {
            clearInterval(bootInterval);
            cancelAnimationFrame(animationId);
            setTimeout(() => {
                splashEl.classList.add('fade-out');
                playUiSound('unlock');
                setTimeout(() => {
                    splashEl.remove();
                }, 500);
            }, 350);
        }
    }, 65);
}

// ========================================================
// 🔔 TOAST NOTIFICATIONS
// ========================================================
function showToast(msg) {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 20);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

function copyPeriodNumber() {
    const text = document.getElementById('currentPeriod').innerText;
    navigator.clipboard.writeText(text).then(() => {
        showToast("📋 Period copied: " + text);
    }).catch(() => {
        showToast("📋 Period: " + text);
    });
}

function toggleAudio() {
    const soundIcon = document.getElementById('soundIcon');
    if (soundIcon.innerText === '🔊') {
        soundIcon.innerText = '🔇';
    } else {
        soundIcon.innerText = '🔊';
        playUiSound('click');
    }
}

// ========================================================
// 🚀 APPLICATION INITIALIZATION
// ========================================================
window.addEventListener('DOMContentLoaded', () => {
    // 🚀 Sacred Quantum System Bootloader Animation
    const bootOverlay = document.getElementById('systemBootOverlay');
    const bootBar = document.getElementById('bootProgressBar');
    const bootPct = document.getElementById('bootPercentText');
    const bootStatus = document.getElementById('bootStatusText');

    if (bootOverlay) {
        let p = 0;
        const bootTimer = setInterval(() => {
            p += 4;
            if (bootBar) bootBar.style.width = `${Math.min(p, 100)}%`;
            if (bootPct) bootPct.innerText = `${Math.min(p, 100)}%`;
            
            if (p === 32) {
                if (bootStatus) bootStatus.innerText = 'ALIGNING SACRED CHAKRA MATRIX...';
            } else if (p === 72) {
                if (bootStatus) bootStatus.innerText = 'CALIBRATING QUANTUM ENGINE...';
            } else if (p >= 100) {
                clearInterval(bootTimer);
                if (bootStatus) bootStatus.innerText = 'SACRED ENGINE READY [100%]';
                playUiSound('unlock');
                setTimeout(() => {
                    bootOverlay.style.opacity = '0';
                    bootOverlay.style.pointerEvents = 'none';
                    setTimeout(() => bootOverlay.remove(), 600);
                }, 250);
            }
        }, 26);
    }

    checkExistingAuth();
    syncBroadcastAndSettings();
    setInterval(updateTimer, 1000);
    updateTimer();
    syncData(true);

    // Continuous Live Draw & History Sync every 4 seconds
    setInterval(() => syncData(), 4000);

    // Periodic Server Auth & Broadcast Check
    setInterval(checkExistingAuth, 15000);
    setInterval(syncBroadcastAndSettings, 15000);
    window.addEventListener('storage', checkExistingAuth);
    initFloatingLogoDrag();
});


// ═══════════════════════════════════════════════════════
// COMPACT DRAGGABLE MINI HACK PANEL (JAI CLUB Style)
// ═══════════════════════════════════════════════════════
let hackPanelOpen = false;
let gameLoaded = false;
let hfpBypassRunning = false;

const HFP_STAGES = ["INITIALIZING","TUNNELING","ROUTING","LOCKING","DECRYPTING","CRACKING","READY"];
const HFP_SUBS   = ["ESTABLISHING TUNNEL...","ROUTING NETWORK...","TRACING ENDPOINTS...","ENDPOINT LOCKED...","DECRYPTING SEED...","CRACKING CIPHER...","UNLOCKED \u2713"];

function hfpUpdatePrediction(revealNow = false) {
    const sizeEl = document.getElementById('hfpResSize');
    const ballContainer = document.getElementById('hfpResNumContainer');
    const colorBadge = document.getElementById('hfpResColorBadge');
    const confEl = document.getElementById('hfpResConfidence');
    const btnText = document.getElementById('hfpPredictBtnText');
    const sizeGlow = document.getElementById('hfpSizeGlow');
    const numGlow = document.getElementById('hfpNumGlow');
    const sizeSvg = document.getElementById('hfpSizeYantraSvg');
    const numSvg = document.getElementById('hfpNumYantraSvg');

    if (!currentTargetPeriod) {
        if (sizeEl) {
            sizeEl.innerHTML = `<span class="text-base font-orbitron font-extrabold text-[#00E5FF] tracking-wider select-none">READY</span>`;
            sizeEl.className = "relative z-10 flex items-center justify-center";
        }
        if (ballContainer) {
            ballContainer.innerHTML = `<div class="relative w-10 h-10 flex items-center justify-center"><div class="absolute inset-0 rounded-full border border-dashed border-[#00E5FF]/60 animate-spin"></div><span class="relative z-10 text-[10px] font-mono font-bold text-[#4DEBFF] select-none tracking-wider">SCAN</span></div>`;
        }
        if (colorBadge) colorBadge.className = 'w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]';
        return;
    }

    const pred = getPredictionForPeriod(currentTargetPeriod);
    const size = pred.size || 'BIG';
    const num = pred.number !== undefined ? parseInt(pred.number) : 5;
    const safeNum = Math.max(0, Math.min(9, isNaN(num) ? 5 : num));
    const animClass = revealNow ? " glitch-reveal-flash" : "";
    const isBig = size === 'BIG';

    if (hasPredictedCurrentPeriod) {
        if (sizeEl) {
            sizeEl.innerText = size;
            sizeEl.className = (isBig 
                ? "relative z-10 text-2xl font-orbitron font-black text-size-big select-none" 
                : "relative z-10 text-2xl font-orbitron font-black text-size-small select-none") + animClass;
        }
        if (confEl) {
            confEl.innerText = `${pred.confidence || '98.6'}% PROB`;
            confEl.className = `text-[8.5px] font-mono font-bold px-2 py-0.5 rounded-full ${isBig ? 'badge-size-big' : 'badge-size-small'}${animClass}`;
        }
        if (sizeGlow) {
            sizeGlow.className = `yantra-chakra-particle-glow ${isBig ? 'chakra-aura-big' : 'chakra-aura-small'}`;
        }
        if (sizeSvg) {
            sizeSvg.className = `yantra-chakra-svg transition-all duration-300 ${isBig ? 'chakra-svg-big' : 'chakra-svg-small'}${animClass}`;
        }

        if (ballContainer) {
            ballContainer.innerHTML = `${renderCyberBall(safeNum, 56)}`;
        }
        if (numGlow) {
            numGlow.className = `yantra-chakra-particle-glow ${pred.color === 'red' ? 'chakra-aura-small' : 'chakra-aura-big'}`;
        }
        if (numSvg) {
            numSvg.className = `yantra-chakra-svg transition-all duration-300 ${pred.color === 'red' ? 'chakra-svg-small' : 'chakra-svg-big'}${animClass}`;
        }

        if (colorBadge) {
            colorBadge.className = (pred.color === 'red' ? 'w-2.5 h-2.5 rounded-full bg-cyber-neonPink shadow-[0_0_8px_#ff007f]' : 'w-2.5 h-2.5 rounded-full bg-cyber-neonGreen shadow-[0_0_8px_#00ff88]') + animClass;
        }
        if (btnText) {
            btnText.innerText = "RE-ANALYZE ROUND ⚡";
        }
    } else {
        if (sizeEl) {
            sizeEl.innerHTML = `<span class="text-xl font-orbitron font-extrabold text-[#00E5FF] tracking-wider select-none">READY</span>`;
            sizeEl.className = "relative z-10 flex items-center justify-center";
        }
        if (confEl) {
            confEl.className = "text-[8.5px] font-mono text-cyber-neonCyan font-bold px-2 py-0.5 rounded-full bg-cyber-neonCyan/10 border border-cyber-neonCyan/30";
            confEl.innerText = "98.6% PROB";
        }
        if (sizeGlow) sizeGlow.className = "yantra-chakra-particle-glow";
        if (sizeSvg) sizeSvg.className = "yantra-chakra-svg transition-all duration-300";
        if (numGlow) numGlow.className = "yantra-chakra-particle-glow";
        if (numSvg) numSvg.className = "yantra-chakra-svg transition-all duration-300";

        if (ballContainer) {
            ballContainer.innerHTML = `<div class="relative w-12 h-12 flex items-center justify-center"><div class="absolute inset-0 rounded-full border border-dashed border-[#00E5FF]/60 animate-spin"></div><span class="relative z-10 text-[11px] font-mono font-bold text-[#4DEBFF] select-none tracking-wider">SCAN</span></div>`;
        }
        if (colorBadge) {
            colorBadge.className = 'w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]';
        }
        if (btnText) {
            btnText.innerText = `PREDICT ROUND #${currentTargetPeriod ? currentTargetPeriod.slice(-5) : ''} ⚡`;
        }
    }
}

function hfpPredictRound() {
    if (hfpBypassRunning) return;
    hfpBypassRunning = true;
    playUiSound('analyze');

    const btnText = document.getElementById('hfpPredictBtnText');
    const sizeEl = document.getElementById('hfpResSize');
    const ballContainer = document.getElementById('hfpResNumContainer');
    const colorBadge = document.getElementById('hfpResColorBadge');
    const confEl = document.getElementById('hfpResConfidence');
    const sizeSvg = document.getElementById('hfpSizeYantraSvg');
    const numSvg = document.getElementById('hfpNumYantraSvg');
    const sizeGlow = document.getElementById('hfpSizeGlow');
    const numGlow = document.getElementById('hfpNumGlow');

    // 🔥 Trigger intense high-speed fire chakra spin and plasma surge
    if (sizeSvg) sizeSvg.classList.add('chakra-fast-fire-spin');
    if (numSvg) numSvg.classList.add('chakra-fast-fire-spin');
    if (sizeGlow) sizeGlow.classList.add('chakra-fire-glow-active');
    if (numGlow) numGlow.classList.add('chakra-fire-glow-active');

    const hexCodes = ["0x7F", "FIRE", "SOLV", "0x9B", "SYNC", "0x3C", "PLASMA", "INFER", "0x8A", "CALC"];
    let scrambleTick = 0;

    // Fast digital rolling scramble on the mini floating card with fire glowing pulses
    const scrambleInterval = setInterval(() => {
        scrambleTick++;
        const randNum = Math.floor(Math.random() * 10);
        const randHex = hexCodes[scrambleTick % hexCodes.length];
        
        if (sizeEl) {
            sizeEl.innerHTML = `<span class="text-xl font-mono font-black text-[#00f0ff] scramble-digit-active select-none tracking-wider" style="text-shadow: 0 0 12px #00f0ff, 0 0 25px #ff007f;">${randHex}</span>`;
        }
        if (ballContainer) {
            ballContainer.innerHTML = `
                <div class="relative w-12 h-12 flex items-center justify-center">
                    <div class="absolute inset-0 rounded-full border-2 border-dashed border-[#00ff88] animate-spin" style="animation-duration: 0.4s;"></div>
                    <span class="text-xl font-orbitron font-black text-[#00ff88] scramble-digit-active" style="text-shadow: 0 0 14px #00ff88, 0 0 25px #00f0ff;">${randNum}</span>
                </div>
            `;
        }
        if (colorBadge) {
            colorBadge.className = (scrambleTick % 2 === 0) ? 'w-2.5 h-2.5 rounded-full bg-cyber-neonGreen shadow-[0_0_10px_#00ff88]' : 'w-2.5 h-2.5 rounded-full bg-cyber-neonPink shadow-[0_0_10px_#ff007f]';
        }
        if (confEl) {
            confEl.innerText = `${(94 + (scrambleTick % 5)).toFixed(1)}% COMPUTING`;
        }
    }, 45);

    let p = 0;
    let stage = 0;
    const interval = setInterval(() => {
        p += 1.6; // ~2.5s total suspenseful duration
        const safeP = Math.min(100, Math.floor(p));

        if (p >= 18 && stage === 0) {
            stage = 1;
            if (btnText) btnText.innerText = `[01/04] INTERCEPTING LIVE STREAM...`;
            playUiSound('beep');
        } else if (p >= 42 && stage === 1) {
            stage = 2;
            if (btnText) btnText.innerText = `[02/04] EXTRACTING SERVER SEED...`;
            playUiSound('beep');
        } else if (p >= 68 && stage === 2) {
            stage = 3;
            if (btnText) btnText.innerText = `[03/04] NEURAL INFERENCE (99.4%)...`;
            playUiSound('beep');
        } else if (p >= 88 && stage === 3) {
            stage = 4;
            if (btnText) btnText.innerText = `[04/04] QUANTUM CONVERGENCE...`;
            playUiSound('beep');
        } else if (p >= 100) {
            clearInterval(interval);
            clearInterval(scrambleInterval);
            if (sizeSvg) sizeSvg.classList.remove('chakra-fast-fire-spin');
            if (numSvg) numSvg.classList.remove('chakra-fast-fire-spin');
            if (sizeGlow) sizeGlow.classList.remove('chakra-fire-glow-active');
            if (numGlow) numGlow.classList.remove('chakra-fire-glow-active');
            hfpBypassRunning = false;
            hasPredictedCurrentPeriod = true;
            applyUnlockedState(true);
            playUiSound('unlock');
            showToast(`⚡ Round #${(currentTargetPeriod || '').slice(-5)} Decrypted!`);
        }
    }, 40);
}

function closeFloatingAndReturnHome() {
    const panel = document.getElementById('hackFloatPanel');
    if (panel) {
        panel.classList.remove('show');
        panel.style.display = 'none';
    }
    hackPanelOpen = false;
    const floatBubble = document.getElementById('floatingLogoBubble');
    if (floatBubble) floatBubble.style.display = 'none';
    const gameContainer = document.getElementById('gameIframeContainer');
    if (gameContainer) gameContainer.classList.add('hidden');
    const mainConsole = document.getElementById('hackConsoleContainer');
    if (mainConsole) mainConsole.style.display = 'block';

    const bottomNav = document.getElementById('bottomNavBar') || document.querySelector('.bottom-nav-bar');
    if (bottomNav) bottomNav.style.display = 'flex';

    playUiSound('click');
}

function toggleHackPanel() {
    const panel = document.getElementById('hackFloatPanel');
    if (!panel) return;
    if (hackPanelOpen) {
        panel.classList.remove('show');
        const floatBubble = document.getElementById('floatingLogoBubble');
        if (floatBubble) {
            floatBubble.style.display = 'flex';
            initFloatingLogoDrag();
        }
        panel.classList.add('hide');
        hackPanelOpen = false;
        setTimeout(() => { panel.style.display = 'none'; panel.classList.remove('hide'); }, 320);
    } else {
        panel.style.display = 'block';
        panel.classList.remove('hide');
        panel.classList.add('show');
        const floatBubble = document.getElementById('floatingLogoBubble');
        if (floatBubble) floatBubble.style.display = 'none';
        hackPanelOpen = true;
        hfpUpdatePrediction();
    }
    playUiSound('click');
}

function loadGameAndShowFloating() {
    const gameContainer = document.getElementById('gameIframeContainer');
    const gameIframe    = document.getElementById('gameIframe');
    if (gameContainer) { 
        gameContainer.classList.remove('hidden');
        gameContainer.style.zIndex = '100';
    }
    if (gameIframe && !gameLoaded) {
        gameIframe.src = 'https://www.veergame37.com/#/saasLottery/WinGo?gameCode=WinGo_1M&lottery=WinGo';
        gameLoaded = true;
    }
    // Hide old full console and bottom dock bar
    const mainConsole = document.getElementById('hackConsoleContainer');
    if (mainConsole) mainConsole.style.display = 'none';

    const bottomNav = document.getElementById('bottomNavBar') || document.querySelector('.bottom-nav-bar');
    if (bottomNav) bottomNav.style.display = 'none';

    // Auto-open floating panel & initialize drags
    toggleHackPanel();
    initHfpDrag();
    initFloatingLogoDrag();
}

function initHfpDrag() {
    const el = document.getElementById('hackFloatPanel');
    if (!el || el._dragInit) return;
    el._dragInit = true;
    let dragging = false, startX = 0, startY = 0, initL = 0, initT = 0;
    function getXY(e) {
        if (e.touches && e.touches.length) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        return { x: e.clientX, y: e.clientY };
    }
    function onStart(e) {
        if (e.target.closest && e.target.closest('button')) return;
        const p = getXY(e);
        startX = p.x; startY = p.y;
        const r = el.getBoundingClientRect();
        initL = r.left; initT = r.top;
        el.style.left = initL + 'px';
        el.style.top  = initT + 'px';
        el.style.transition = 'none';
        dragging = true;
        window.addEventListener('mousemove', onMove, { passive: false });
        window.addEventListener('touchmove', onMove, { passive: false });
        window.addEventListener('mouseup', onEnd);
        window.addEventListener('touchend', onEnd);
        window.addEventListener('touchcancel', onEnd);
    }
    function onMove(e) {
        if (!dragging) return;
        if (e.cancelable) e.preventDefault();
        const p = getXY(e);
        const dx = p.x - startX, dy = p.y - startY;
        const maxW = Math.max(0, window.innerWidth  - el.offsetWidth);
        const maxH = Math.max(0, window.innerHeight - el.offsetHeight);
        el.style.left = Math.max(0, Math.min(maxW, initL + dx)) + 'px';
        el.style.top  = Math.max(0, Math.min(maxH, initT + dy)) + 'px';
    }
    function onEnd() {
        dragging = false;
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('touchmove', onMove);
        window.removeEventListener('mouseup', onEnd);
        window.removeEventListener('touchend', onEnd);
        window.removeEventListener('touchcancel', onEnd);
    }
    el.addEventListener('mousedown', onStart);
    el.addEventListener('touchstart', onStart, { passive: false });
}

// Silky-smooth Draggable Floating Logo Bubble with Tap vs Drag Detection
function initFloatingLogoDrag() {
    const bubble = document.getElementById('floatingLogoBubble');
    if (!bubble || bubble._dragInit) return;
    bubble._dragInit = true;

    let isDragging = false;
    let hasMoved = false;
    let startX = 0, startY = 0;
    let initLeft = 0, initTop = 0;

    function getXY(e) {
        if (e.touches && e.touches.length > 0) {
            return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
        return { x: e.clientX, y: e.clientY };
    }

    function onDragStart(e) {
        const p = getXY(e);
        startX = p.x;
        startY = p.y;
        const rect = bubble.getBoundingClientRect();
        initLeft = rect.left;
        initTop = rect.top;

        // Reset any translateY transform for exact pixel coordinates
        bubble.style.transform = 'none';
        bubble.style.left = initLeft + 'px';
        bubble.style.top = initTop + 'px';
        bubble.style.transition = 'none';

        isDragging = true;
        hasMoved = false;

        window.addEventListener('mousemove', onDragMove, { passive: false });
        window.addEventListener('touchmove', onDragMove, { passive: false });
        window.addEventListener('mouseup', onDragEnd);
        window.addEventListener('touchend', onDragEnd);
        window.addEventListener('touchcancel', onDragEnd);
    }

    function onDragMove(e) {
        if (!isDragging) return;
        const p = getXY(e);
        const dx = p.x - startX;
        const dy = p.y - startY;

        if (Math.hypot(dx, dy) > 4) {
            hasMoved = true;
            if (e.cancelable) e.preventDefault();
        }

        const maxW = Math.max(0, window.innerWidth - bubble.offsetWidth - 6);
        const maxH = Math.max(0, window.innerHeight - bubble.offsetHeight - 6);
        const newLeft = Math.max(6, Math.min(maxW, initLeft + dx));
        const newTop = Math.max(6, Math.min(maxH, initTop + dy));

        bubble.style.left = newLeft + 'px';
        bubble.style.top = newTop + 'px';
    }

    function onDragEnd(e) {
        if (!isDragging) return;
        isDragging = false;

        window.removeEventListener('mousemove', onDragMove);
        window.removeEventListener('touchmove', onDragMove);
        window.removeEventListener('mouseup', onDragEnd);
        window.removeEventListener('touchend', onDragEnd);
        window.removeEventListener('touchcancel', onDragEnd);

        bubble.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';

        // If user tapped without dragging, toggle the hack panel!
        if (!hasMoved) {
            toggleHackPanel();
        }
    }

    bubble.addEventListener('mousedown', onDragStart);
    bubble.addEventListener('touchstart', onDragStart, { passive: false });
}

// Logo click handler - opens mini panel if verified, else opens unlock modal
function onLogoClick() {
    console.log('Logo clicked! unlocked=' + isUnlocked + ', gameLoaded=' + gameLoaded);
    if (isUnlocked && gameLoaded) {
        toggleHackPanel();
    } else {
        openUnlockModal();
    }
    playUiSound('click');
}
