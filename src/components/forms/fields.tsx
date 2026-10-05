import { clsx } from "@/lib/clsx";

/**
 * Form primitives shared by Join, the pop-up list, and the free consult, so
 * the three forms read as one system: the warm paper field from the design
 * system (12.5px/600 label, 50px control, 12px radius, amber focus), brick
 * error copy under the field, and the amber submit with the wipe and nudge.
 */

const control =
  "w-full rounded-[12px] border bg-[#FDFBF5] px-4 font-sans text-[16px] text-ink outline-none transition-colors placeholder:text-ink/35 hover:border-ink/30 focus-visible:border-amber focus-visible:ring-2 focus-visible:ring-amber/40";

export const labelText = "mb-2 block font-sans text-[12.5px] font-semibold text-ink";

export function Optional({ children }: { children: React.ReactNode }) {
  return <span className="font-normal text-ink/50">{children}</span>;
}

export function FieldError({ id, children }: { id?: string; children?: React.ReactNode }) {
  if (!children) return null;
  return (
    <span id={id} className="mt-[7px] block font-sans text-[12px] text-[#b4472e]">
      {children}
    </span>
  );
}

type FieldProps = {
  id: string;
  label: React.ReactNode;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Field({ id, label, error, className, ...input }: FieldProps) {
  const errId = `${id}-error`;
  return (
    <div className={className}>
      <label htmlFor={id} className={labelText}>
        {label}
      </label>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? errId : undefined}
        className={clsx(control, "h-[50px]", error ? "border-[#b4472e]" : "border-ink/20")}
        {...input}
      />
      <FieldError id={errId}>{error}</FieldError>
    </div>
  );
}

type TextAreaProps = {
  id: string;
  label: React.ReactNode;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ id, label, error, className, ...area }: TextAreaProps) {
  const errId = `${id}-error`;
  return (
    <div className={className}>
      <label htmlFor={id} className={labelText}>
        {label}
      </label>
      <textarea
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? errId : undefined}
        className={clsx(control, "resize-y py-3.5 leading-[1.5]", error ? "border-[#b4472e]" : "border-ink/20")}
        {...area}
      />
      <FieldError id={errId}>{error}</FieldError>
    </div>
  );
}

/** A pill toggle. Selected reads forest-deep with bone text. */
export function Chip({
  on,
  onClick,
  children,
  weight = "semibold",
}: {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
  weight?: "semibold" | "medium";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={clsx(
        "min-h-11 rounded-full border px-[18px] font-sans text-[14px] transition-colors",
        weight === "semibold" ? "font-semibold" : "font-medium",
        on ? "border-forest-deep bg-forest-deep text-bone" : "border-ink/20 bg-transparent text-ink hover:border-ink/45",
      )}
    >
      {children}
    </button>
  );
}

export function SubmitButton({ pending, children }: { pending?: boolean; children: React.ReactNode }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="group/btn relative isolate inline-flex items-center gap-2 self-start overflow-hidden rounded-full bg-amber px-[30px] py-4 font-sans text-[15px] font-semibold text-ink shadow-[0_12px_34px_rgba(120,68,16,0.34)] transition-opacity disabled:opacity-70"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-[1] origin-left scale-x-0 bg-amber-deep transition-transform duration-300 ease-out group-hover/btn:scale-x-100"
      />
      <span className="relative z-[1] inline-flex items-center gap-2">
        {children}
        <span aria-hidden="true" className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1">
          &rarr;
        </span>
      </span>
    </button>
  );
}

/** The paper card a form sits on. */
export function FormCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        "rounded-[20px] border border-bark/15 bg-[#FDFBF5] p-[clamp(28px,3.4vw,40px)] shadow-[0_1px_2px_rgba(42,33,24,.05),0_8px_24px_rgba(42,33,24,.06)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** The honeypot: off-screen for people, catnip for bots. */
export function Honeypot({ value, onChange }: { value?: string; onChange?: (v: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px]">
      <label>
        Company
        <input
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        />
      </label>
    </div>
  );
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
