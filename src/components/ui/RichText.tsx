import { Fragment } from "react";
import type { HeadlineLine } from "@/content/home";

/**
 * Renders headline data (lines of segments) into nodes: each line is separated
 * by a <br>, and `em` segments become <em> so the display italic accent shows.
 * Color the accent from the parent heading with `[&_em]:text-...`.
 */
export default function RichText({ lines }: { lines: HeadlineLine[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line.map((seg, j) =>
            seg.em ? <em key={j}>{seg.text}</em> : <Fragment key={j}>{seg.text}</Fragment>,
          )}
        </Fragment>
      ))}
    </>
  );
}
