import { cta } from "@/content/home";
import ClosingCta from "@/components/site/ClosingCta";

/**
 * Closing CTA band for the homepage. Thin wrapper over the reusable ClosingCta
 * so every page closes on the same golden-dusk note.
 */
export default function CtaBand() {
  return <ClosingCta headline={cta.headline} body={cta.body} cta={cta.primary} />;
}
