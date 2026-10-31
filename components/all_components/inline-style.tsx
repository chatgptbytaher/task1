import fs from "node:fs";
import path from "node:path";

interface InlineStyleProps {
  file: string;
  id?: string;
}

/** One original <style> block = one <style> tag. Never merge them: cascade order and a stray "}" in one block depend on it. */
export default function InlineStyle({ file, id }: InlineStyleProps) {
  const css = fs.readFileSync(path.join(process.cwd(), "styles", "europa", `${file}.css`), "utf8");
  return <style id={id} dangerouslySetInnerHTML={{ __html: css }} />;
}
