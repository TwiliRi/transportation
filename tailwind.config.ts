import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        '3xl': '0 35px 60px -5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
} satisfies Config;
