/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            // Adding styles for Quill editor content
            h1: {
              fontSize: "2.25rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              color: "#333",
            },
            h2: {
              fontSize: "1.875rem",
              fontWeight: "600",
              marginBottom: "1rem",
              color: "#333",
            },
            ol: {
              marginBottom: "1rem",
            },
            ul: {
              marginBottom: "1rem",
            },
            li: {
              paddingLeft: "1.25rem",
              marginBottom: "0.5rem",
              listStyleType: "decimal",
            },
            blockquote: {
              paddingLeft: "1rem",
              borderLeft: "4px solid #e5e7eb",
              fontStyle: "italic",
              color: "#6b7280",
              marginBottom: "1rem",
            },
            img: {
              maxWidth: "100%",
              height: "auto",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
