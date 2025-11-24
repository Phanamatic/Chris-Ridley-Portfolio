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

## Deploy to GitHub Pages
Vite builds a fully static bundle in `dist/`, which you can serve directly from GitHub Pages. The current Vite config sets `base: './'` so assets load correctly from a project page (e.g., `https://<username>.github.io/<repo>/`).

1. Build the site:
   ```bash
   npm run build
   ```
2. Push the `dist/` output to a `gh-pages` branch:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```
   (If the branch already exists, add `--force`.)
3. In your repository settings on GitHub, enable Pages and set the source to the `gh-pages` branch.
4. Once published, visit the GitHub Pages URL. A blank page usually means the assets could not be found; double-check that the `base` path matches your repo name or keep it as `./` for relative asset URLs.
