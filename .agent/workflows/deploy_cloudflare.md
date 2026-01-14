---
description: Wie man die KMU Digital App auf Cloudflare Pages deployt
---

# Deployment auf Cloudflare Pages

Es gibt zwei Wege, die App zu deployen. Methode 1 ist empfohlen, da sie automatisch bei jedem Git Push aktualisiert.

## Methode 1: Via GitHub Integration (Empfohlen)

Da der Code bereits auf GitHub liegt (`https://github.com/andischwaiger87-oss/KMU-Foerderung.git`), ist dies der einfachste Weg.

1.  Logge dich im [Cloudflare Dashboard](https://dash.cloudflare.com) ein.
2.  Gehe zu **Workers & Pages** -> **Create Application** -> **Pages** -> **Connect to Git**.
3.  Wähle dein Repository `KMU-Foerderung` aus.
4.  **Konfiguration**:
    *   **Project Name**: `kmu-foerderung` (oder ähnlich)
    *   **Framework Preset**: Wähle `Vite` aus.
    *   **Build command**: `npm run build` (wird automatisch gesetzt)
    *   **Build output directory**: `dist` (wird automatisch gesetzt)
5.  Klicke auf **Save and Deploy**.

Das war's! Cloudflare baut die App und deployt sie. Jede Änderung, die du auf GitHub pushst, löst ein neues Deployment aus.

## Methode 2: Direct Upload (CLI)

Wenn du manuell von deinem Computer deployen willst.

1.  Installiere Wrangler (falls noch nicht geschehen):
    ```powershell
    npm install -g wrangler
    ```
2.  Logge dich ein:
    ```powershell
    npx wrangler login
    ```
3.  Erstelle den Production Build (falls noch nicht frisch):
    ```powershell
    npm run build
    ```
    // turbo
4.  Deploye den `dist` Ordner:
    ```powershell
    npx wrangler pages deploy dist --project-name kmu-foerderung
    ```

Du erhältst eine URL (z.B. `https://kmu-foerderung.pages.dev`), unter der die App erreichbar ist.
