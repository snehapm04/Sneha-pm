import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Sneha M | AI & Full Stack Developer",
  description:
    "Portfolio of Sneha – AI & Machine Learning Engineer building intelligent and scalable applications.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
        ${inter.variable}
        ${spaceGrotesk.variable}
        antialiased
        scroll-smooth
        font-body
        `}
      >
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
export function generateViewport() {
  return {
    viewport: {
      width: "device-width",
      initialScale: 1,
      minimumScale: 1,
      maximumScale: 1,
      userScalable: true,
    },
    themeColor: "#0f172a", // Move themeColor here
  };
}
