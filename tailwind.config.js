/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        primary: "#1F2937",
        secondary: "#4B5563",
        accent: "#9CA3AF",
        success: "#10B981",
        info: "#3B82F6",
        warning: "#F59E0B",
        danger: "#EF4444",
      
    },
  },
  plugins: [],
}
