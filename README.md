# Chris Ridley Portfolio

This Vite-powered React site needs to be served through Vite so the JSX and npm dependencies can be bundled. Opening `index.html` directly in a browser will show a blank page because the browser cannot resolve imports like `src/main.jsx` or your node_modules.

## Run the site locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server (includes hot reload):
   ```bash
   npm run dev
   ```
3. Open the URL shown in the terminal (usually http://localhost:5173).

## Build for static hosting
1. Create the production bundle:
   ```bash
   npm run build
   ```
2. Preview the built files locally:
   ```bash
   npm run preview
   ```
   This serves the `dist/` output so you can verify it before uploading to your host.

If you plan to host the site without running the Vite dev server, deploy the contents of `dist/` after running the build step.
