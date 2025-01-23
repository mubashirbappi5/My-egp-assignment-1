/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light",],
  },
  safelist: [
    "bg-blue-300",
    "navbar",
    "w-11/12",
    "mx-auto",
    "navbar-start",
    "dropdown",
    "btn",
    "btn-ghost",
    "lg:hidden",
    "h-5",
    "w-5",
    "menu",
    "menu-sm",
    "dropdown-content",
    "bg-base-100",
    "rounded-box",
    "z-[1]",
    "mt-3",
    "w-52",
    "p-2",
    "shadow",
    "text-xl",
    "navbar-center",
    "hidden",
    "lg:flex",
    "menu-horizontal",
    "px-1",
    "navbar-end",
    "gap-4",
    "btn-outline",
  ],

};
