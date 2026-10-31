# Europa – Next.js

```
npm install
npm run dev        # http://localhost:3000   (test final behaviour with: npm run build && npm start)
```

Routes: `/`, `/about`, `/speakers`, `/programme`, `/tracks` (each is its own root layout = its own original `<head>`).
Links such as `about.html` / `index.html#contact` are unchanged; `next.config.mjs` rewrites them.

- `components/all_components/<page>/*.tsx` – one file per section, markup verbatim.
- `styles/europa/<page>/NN.css` – every original `<style>` block, separate, original order. Never merge.
- `public/js/<page>/NN-*.js` – every original inline script, verbatim, original order, run by `site-scripts.tsx`.
- `src/assets/{images,videos,icons}` – imported assets (only the 27 files the pages use).
- Tailwind: preflight off, `container` off, scans only `components/ui` and `app`.

Compare with the original: `npm i -D playwright && npx playwright install chromium && node compare.mjs ../Europa-Website-Lite/index.html http://localhost:3000/`
