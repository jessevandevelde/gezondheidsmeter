# Gezondheidsmeter

Deze npm-workspace bevat de Angular 20-frontend in `client/` en de Express-server met TypeScript in `server/`. Gebruik Node 24 zoals vastgelegd in `.node-version`.

## Lokaal starten

Voer vanuit de hoofdmap `npm ci` uit. Start daarna in twee terminals `npm run start:server` en `npm run start:client`.

Open [de frontend](http://127.0.0.1:4200). Angular stuurt verzoeken onder `/api/` door naar poort 3000. Via [de healthcheck](http://127.0.0.1:4200/api/health) controleer je de verbinding met de server.

Kopieer indien nodig `.env.example` naar `.env` voor lokale serverinstellingen. Als je de serverpoort wijzigt, pas dan ook het doel in `client/proxy.conf.json` aan.

## Build en linting

- `npm run build` bouwt de server en de Angular-frontend.
- `npm run lint:all` controleert TypeScript, Angular-templates en CSS.
- `npm run eslint:all` en `npm run stylelint` voeren de controles afzonderlijk uit.
