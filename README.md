# Apex Defense Solutions Website

Public marketing website for Apex Defense Solutions, a service-disabled veteran-owned business in Tampa, Florida specializing in IT design, network security, infrastructure support, firewall management, and courier services.

## Project Files

- `index.html` - homepage
- `about.html` - company overview
- `services.html` - service breakdown
- `styles.css` - shared site styles
- `script.js` - quote form mailto behavior
- `logo.svg` - SVG brand mark
- `Dockerfile` - container image for the site
- `docker-compose.yml` - local container orchestration

## Run Locally With Docker

```bash
source ~/.zprofile
docker compose up --build -d
```

Then open `http://localhost:8080`.

## Stop

```bash
docker compose down
```
