"use client";

import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import { useEffect, useState } from "react";
import { metadata } from "./metadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Recuperamos el modo guardado en el localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  // Guardamos el modo en localStorage al cambiarlo
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Alternamos el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${darkMode ? 'dark' : ''}`}>
        {/* <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? "🌞" : "🌙"}
        </button> */}
        {children}
      </body>
    </html>
  );
}
