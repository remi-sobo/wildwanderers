/**
 * Footer, ported from the mock: a forest-deep band with the wordmark, the
 * practical one-liner, and the build credit. The fuller practical info band
 * (where, when, group size) arrives with Gabe's answers in a later ring.
 */
export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-forest-deep px-[60px] py-[46px] text-bone/70">
      <div className="font-display text-[22px] font-medium text-bone">Wild Wanderers</div>
      <div className="font-sans text-[12.5px] tracking-[0.04em]">
        Movement · nature · connection · on the Baylands
      </div>
      <div className="font-sans text-[10.5px] uppercase tracking-[0.22em] opacity-60">
        A SOBO build
      </div>
    </footer>
  );
}
