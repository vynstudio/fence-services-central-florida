# Lead delivery: Telegram + Quo

When a visitor submits **Get free quote**, the site posts to `POST /api/leads`, which:

1. **Telegram** — full lead alert to your bot (team only)  
2. **Quo SMS** — confirmation text to the **client only**

## Netlify environment variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `TELEGRAM_BOT_TOKEN` | Yes* | Bot from [@BotFather](https://t.me/BotFather) |
| `TELEGRAM_CHAT_ID` | Yes* | Group or user id (group ids are often negative) |
| `QUO_API_KEY` | Yes* | Quo → Settings → API |
| `QUO_FROM_NUMBER` | Yes* | Your Quo business number, E.164 (`+1407…`) |
| `QUO_USER_ID` | No | Send as a specific workspace member |

\*At least one channel (Telegram **or** Quo) should be set in production. The form still returns success if a channel fails or is missing so the customer always reaches thank-you.

Also set these in Netlify UI → Site configuration → Environment variables, then **redeploy**.

## Telegram setup

1. Message [@BotFather](https://t.me/BotFather) → `/newbot` → copy token → `TELEGRAM_BOT_TOKEN`.
2. Create a private group, e.g. `FenceLine Leads`.
3. Add the bot to the group (admin optional but reliable).
4. Send any message in the group.
5. Open  
   `https://api.telegram.org/bot<TOKEN>/getUpdates`  
   and copy `"chat":{"id": -100…}` → `TELEGRAM_CHAT_ID`.

## Quo (OpenPhone) setup

1. [quo.com](https://www.quo.com) → **Settings → API** → create key → `QUO_API_KEY`.
2. Copy your business number as E.164 → `QUO_FROM_NUMBER`.
3. Optional: `GET https://api.quo.com/v1/phone-numbers` with header `Authorization: <key>` for `userId`.
4. Complete **US carrier registration** if Quo requires it for API SMS.
5. Update the public site phone in `lib/site.js` to match the Quo number.

### Test SMS

```bash
curl -X POST https://api.quo.com/v1/messages \
  -H "Authorization: $QUO_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "content": "FenceLine test",
    "from": "+1407XXXXXXX",
    "to": ["+1YOURCELL"]
  }'
```

## Local test

```bash
# .env.local with the vars above
npm run dev

curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Lead",
    "email": "test@example.com",
    "phone": "(407) 555-0100",
    "street": "100 Test St",
    "city": "Orlando",
    "zip": "32801",
    "need": "install",
    "material": "wood",
    "property": "residential",
    "message": "API test"
  }'
```

## Auto-reply copy

Sent to the lead via Quo (editable in `lib/leads/quo.js` → `leadAutoReplyText`):

> Hi {firstName}, this is FenceLine Florida. We received your fence quote request. A representative from our team will contact you soon. Reply here anytime, or call {business number}.

## Files

- `app/api/leads/route.js` — API handler  
- `lib/leads/telegram.js` — Telegram Bot API  
- `lib/leads/quo.js` — Quo SMS API  
- `lib/leads/phone.js` — E.164 helpers  
- `components/lead-form-wizard.jsx` — posts JSON to `/api/leads`
