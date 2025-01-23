import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        baimj: ["Bai Jamjuree"],
        baumans: ["Baumans"],
        roboto: ["Roboto"],
        popp: ["Poppins"],
        mono: ["Mono"],
        sans: ["Sans"],
      },
    },
  },
  plugins: [],
});
