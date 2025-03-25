/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        "bg-primary": "#F5F6FA",
        "bg-secondary-teal": "#E8F7F2",
        "bg-secondary-navy": "#EEF2F7",
        "bg-dark": "#2D3436",

        // Text
        "text-primary": "#2D3436",
        "text-secondary": "#636E72",
        "text-light": "#F5F6FA",

        // Buttons & Interactive Elements
        "btn-primary": "#17B890",
        "btn-secondary": "#1E3D59",
        "hover-teal": "#1ED4AA",
        "hover-navy": "#2C5885",

        // Accents
        "cta-orange": "#FF8C42",
        "highlight-gold": "#FFB648",

        // Borders & Dividers
        "border-light": "#B2BEC3",
        "divider-light": "rgba(178, 190, 195, 0.4)",
      },
      fontFamily: {
        bthin: ["BricolageGrotesque-Thin", "sans-serif"],
        bextralight: ["BricolageGrotesque-ExtraLight", "sans-serif"],
        blight: ["BricolageGrotesque-Light", "sans-serif"],
        bregular: ["BricolageGrotesque-Regular", "sans-serif"],
        bmedium: ["BricolageGrotesque-Medium", "sans-serif"],
        bsemibold: ["BricolageGrotesque-SemiBold", "sans-serif"],
        bbold: ["BricolageGrotesque-Bold", "sans-serif"],
        bextrabold: ["BricolageGrotesque-ExtraBold", "sans-serif"],
      }
    },
  },
  plugins: [],
}


      