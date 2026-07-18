# Google Maps Places (lead form address)

The quote form calls **our server** (`/api/places/*`), which calls Google Places.
That needs a **server API key** (not an HTTP-referrer-only key).

## Setup (required)

1. [Google Cloud Console](https://console.cloud.google.com/) → same project as billing  
2. Enable:
   - [Places API (New)](https://console.cloud.google.com/apis/library/places.googleapis.com)  
   - [Places API](https://console.cloud.google.com/apis/library/places-backend.googleapis.com) (legacy fallback)  
3. [Credentials](https://console.cloud.google.com/apis/credentials) → **Create credentials → API key**  
4. Edit the new key:
   - Name: `FenceLine Server Places`
   - **Application restrictions: None**  
     (Referrer-restricted keys **cannot** be used from Netlify)
   - **API restrictions:** Places API (New) + Places API only  
5. Netlify → Environment variables:

```bash
GOOGLE_MAPS_API_KEY=AIza...server_key_here
```

6. **Redeploy** after saving.

You can keep your browser/referrer key for other uses; the form only needs `GOOGLE_MAPS_API_KEY`.

## Behavior

- Type 3+ characters → suggestions from Google  
- Select → street, city, state, ZIP, lat/lng filled  
- Auto-advance to contact when complete  
- Manual entry always available  

## Telegram

Leads include full address + Maps link when coordinates exist.
