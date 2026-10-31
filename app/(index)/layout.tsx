import type { ReactNode } from "react";
import InlineStyle from "@/components/all_components/inline-style";
import a_45d4ee5bae3b5648_i from "@/assets/icons/45d4ee5bae3b5648.svg";
import caff182fb1b6dd10_i from "@/assets/icons/caff182fb1b6dd10.svg";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html data-wf-page="68efdb37db90f2ad02b2fe9b" data-wf-site="68efdb35db90f2ad02b2fe4b" data-wf-status="1" lang="en" suppressHydrationWarning>
      <head>
      <link href="https://cdn.prod.website-files.com" rel="preconnect" />
        <title>{"Europe Startup Conference 2027 | Founders & Innovation"}</title>
      <meta content="Meet founders, investors and operators shaping Europe’s next generation of startups." name="description" />
      <meta content="Europa | Europe Startup Conference 2027" property="og:title" />
      <meta content="Meet founders, investors and operators shaping Europe's next generation of startups." property="og:description" />
      <meta content="https://cdn.prod.website-files.com/68efdb35db90f2ad02b2fe4b/694830f92d32cafbb0ba9b4d_open%20graph%20image.jpg" property="og:image" />
      <meta content="Europa | Europe Startup Conference 2027" name="twitter:title" />
      <meta content="Meet founders, investors and operators shaping Europe's next generation of startups." name="twitter:description" />
      <meta content="website" property="og:type" />
      <meta content="summary_large_image" name="twitter:card" />
      <link href="assets/cdn.prod.website-files.com/68efdb35db90f2ad02b2fe4b/css/ariyana-studio.webflow.shared.6b9b96103.min.css" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="assets/europa-fonts.css" />
      <InlineStyle file="index/01" />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: "!function (o, c) { var n = c.documentElement, t = \" w-mod-\"; n.className += t + \"js\", (\"ontouchstart\" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + \"touch\") }(window, document);" }} />
      <link href={caff182fb1b6dd10_i} rel="shortcut icon" type="image/x-icon" />
      <link href={a_45d4ee5bae3b5648_i} rel="apple-touch-icon" />
      <link rel="stylesheet" href="assets/europa-fonts.css" />
      <InlineStyle file="index/02" />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: "!function (o, c) { var n = c.documentElement, t = \" w-mod-\"; n.className += t + \"js\", (\"ontouchstart\" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + \"touch\") }(window, document);" }} />
      <link href={caff182fb1b6dd10_i} rel="shortcut icon" type="image/x-icon" />
      <link href={a_45d4ee5bae3b5648_i} rel="apple-touch-icon" />
      <InlineStyle file="index/03" />
      <InlineStyle file="index/04" id="europa-universal-button-hover" />
      <InlineStyle file="index/05" />
      <InlineStyle file="index/06" id="europa-normal-sections" />
      <InlineStyle file="index/07" id="europa-approved-redesign-css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href={"https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap"} rel="stylesheet" />
      <InlineStyle file="index/08" />
      <InlineStyle file="index/09" />
      <InlineStyle file="index/10" />
      <InlineStyle file="index/11" id="eu-speakers-horizontal-style" />
      </head>
      <body data-europa-page="index" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
