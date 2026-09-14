# AMBIKA HACK — Fixed + Admin Panel

This is the supplied frontend rebuilt as a self-contained Python web app.

## Included
- `index.html` — main client UI.
- `js/app.js` — fixed client logic.
- `css/style.css` — original styling.
- `admin.html` + `js/admin.js` — admin control panel.
- `server.py` — API, UID/VIP-key verification, settings, broadcast and live WinGo proxy.
- `data.json` — persistent application data file.
- `render.yaml` / `Procfile` — Render start configuration.

## Admin
Open `/admin.html` and log in with the value of the `ADMIN_PASSWORD` environment variable.

Recommended Render environment variables:
- `ADMIN_PASSWORD` — set your own strong password.
- `SECRET_KEY` — Render can generate this automatically from `render.yaml`.
- `LOTTERY_URL` — optional; defaults to the supplied WinGo 1M history endpoint.

The default development password is `MSD_ADMIN_2026_CHANGE_ME`; change it before production.

## Main fixes
- Fixed mutable URL settings that were declared as `const` and later reassigned.
- Removed the duplicate settings request and uses one same-origin `/api/keys` API.
- Fixed the game iframe from WinGo 30S to WinGo 1M to match the supplied 1M data source.
- Removed fake emergency lottery results when the live source fails.
- Removed broken numbered-ball asset dependencies from result rendering; balls are rendered by the existing 3D renderer.
- Added real server-side UID/key management, HWID binding/reset, expiry, recharge requirement, broadcast and settings management.
- Added `/api/health` for deployment checks.
