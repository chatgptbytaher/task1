// Usage: node compare.mjs <path-to-original.html> <http://localhost:3000/>
// Needs: npm i -D playwright && npx playwright install chromium
// Opens the ORIGINAL (file://) and the NEXT app, scrolls both the same way, prints a signature
// of each and saves screenshots to ./compare-out. Every number in the two lines must match.
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const [orig, next] = process.argv.slice(2);
if (!orig || !next) { console.log("usage: node compare.mjs original.html http://localhost:3000/"); process.exit(1); }
mkdirSync("compare-out", { recursive: true });
const SIG = () => ({
  html: document.documentElement.className,
  scrollTriggers: window.ScrollTrigger ? ScrollTrigger.getAll().length : -1,
  tweens: window.gsap ? gsap.globalTimeline.getChildren(true, true, true).length : -1,
  splitText: document.querySelectorAll("[class*=split],[class*=char],[class*=word]").length,
  height: document.documentElement.scrollHeight,
});
const browser = await chromium.launch();
const out = {};
for (const [name, url] of [["original", pathToFileURL(path.resolve(orig)).href], ["next", next]]) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e).slice(0, 120)));
  await page.goto(url, { waitUntil: "load" });
  await page.waitForTimeout(4000);
  await page.mouse.move(700, 400);
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let i = 0; i < Math.min(40, Math.floor(h / 700) + 2); i++) { await page.mouse.wheel(0, 700); await page.waitForTimeout(200); }
  await page.waitForTimeout(1200);
  out[name] = { ...(await page.evaluate(SIG)), errors };
  for (const y of [0, 1800, 4200, 9000]) {
    await page.evaluate((v) => window.scrollTo(0, v), y);
    await page.waitForTimeout(1300);
    await page.screenshot({ path: `compare-out/${name}-${y}.png` });
  }
  await page.close();
}
await browser.close();
writeFileSync("compare-out/result.json", JSON.stringify(out, null, 2));
console.log(out);
console.log(JSON.stringify(out.original) === JSON.stringify(out.next) ? "SIGNATURES MATCH" : "SIGNATURES DIFFER - send me compare-out/result.json");
