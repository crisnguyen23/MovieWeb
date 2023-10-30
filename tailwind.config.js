export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f171e",
        secondary: "#1a242f",
        "font-primary": "#fff",
        "font-secondary": "#79b8f3",
      },
      gridTemplateColumns: {
        movieCard: "repeat(auto-fill, minmax(220px, 1fr));",
      },
      boxShadow: {
        card: "0 0 1px 1px rgba(255, 255, 255, 0.5);",
      },
    },
  },
  plugins: [],
};
