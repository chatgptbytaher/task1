"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __europaLoadedScripts?: Set<string>;
  }
}

/**
 * Load classic scripts in strict sequential order. Each script is appended,
 * downloaded, and executed before the next script runs.
 */
async function loadScriptsInOrder(sources: string[]) {
  for (const src of sources) {
    await new Promise<void>((resolve) => {
      const existing = document.querySelector<HTMLScriptElement>(
        `script[data-europa-src="${src}"]`,
      );
      if (existing?.dataset.loaded === "true") {
        resolve();
        return;
      }

      const script = existing ?? document.createElement("script");
      script.src = src;
      script.async = false;
      script.dataset.europaSrc = src;
      script.onload = () => {
        script.dataset.loaded = "true";
        resolve();
      };
      script.onerror = () => {
        console.error(`[europa] Could not load ${src}`);
        resolve();
      };
      if (!existing) document.body.appendChild(script);
    });
  }
}

function replayDocumentLifecycle() {
  // A few of the original Webflow bundles register lifecycle callbacks after
  // React has mounted. Replaying these events lets them initialize without
  // holding the whole page behind the browser's image-loading event.
  document.dispatchEvent(new Event("readystatechange"));
  document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: true }));
  window.dispatchEvent(new Event("load"));
}

export default function SiteScripts({ scripts }: { scripts: string[] }) {
  useEffect(() => {
    let cancelled = false;
    void loadScriptsInOrder(scripts).then(() => {
      if (!cancelled) replayDocumentLifecycle();
    });

    return () => {
      cancelled = true;
    };
  }, [scripts]);

  return null;
}
