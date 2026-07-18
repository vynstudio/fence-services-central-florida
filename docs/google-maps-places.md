# Google Maps Places (lead form address)

The quote form uses **Google Places Autocomplete** so leads pick a full street address.

## Setup

1. [Google Cloud Console](https://console.cloud.google.com/) → create/select project  
2. Enable APIs:
   - **Maps JavaScript API**
   - **Places API** (or Places API (New) if your account requires it — classic Places still works with `libraries=places`)
3. Credentials → **API key**  
4. Application restrictions: **HTTP referrers**
   - `https://fencelineflorida.com/*`
   - `https://*.netlify.app/*`
   - `http://localhost:3000/*` (dev)
5. Netlify env (and local `.env.local`):

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIza...
```

6. Redeploy Netlify after saving the variable.

## Behavior

- User types → Google suggestions → selects a place  
- Form fills street, city, state, ZIP, county, lat/lng, place_id  
- Auto-advances to contact step when address is complete  
- Manual entry always available under “Enter or edit address manually”  
- Without a key, the form still works with manual address fields  

## Telegram

Leads include the full formatted address and a Google Maps link when coordinates exist.
