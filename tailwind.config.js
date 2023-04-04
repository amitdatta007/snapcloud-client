/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        snapcloudLight: {
          "primary": "#377DFF",
          "secondary": "#4E5D78",
          "base-100": "#FFFFFF",
          "base-200": "#F9FAFB",
          "base-300": "#F6F7F8",
          "base-content": "#4E5D78",
          "info-content": "#959EAE",
          "success": "#38CB89",
          "warning": "#FFAB00",
          "error": "#FF5630",
          "border": "#DCDFE4",
        },
      },
      {
        snapcloudDark: {
          "primary": "#377DFF",
          "secondary": "#4E5D78",
          "base-100": "#191C21",
          "base-200": "#212833",
          "base-content": "#EEEFF2",
          "info-content": "#959EAE",
          "success": "#38CB89",
          "warning": "#FFAB00",
          "error": "#FF5630",
        },
      },
    ],
  },
}

