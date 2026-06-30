import localFont from "next/font/local";

// Display: Fraunces variable (normal + italic from separate files).
// Italic is for accent words only, per the spec.
export const fraunces = localFont({
  src: [
    {
      path: "./fonts/fraunces-var.ttf",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "./fonts/fraunces-italic-var.ttf",
      weight: "300 900",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "block",
  fallback: ["Georgia", "serif"],
});

// Body and UI: Plus Jakarta Sans variable.
export const jakarta = localFont({
  src: "./fonts/jakarta-var.ttf",
  weight: "300 800",
  style: "normal",
  variable: "--font-jakarta",
  display: "block",
  fallback: ["system-ui", "sans-serif"],
});
