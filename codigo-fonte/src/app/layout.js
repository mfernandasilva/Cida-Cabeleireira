import { Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "../styles/main.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair",
});

const dancingScript = localFont({
  src: "./fonts/DancingScript-VariableFont_wght.ttf",
  variable: "--font-script",
  weight: "400 700",
});

export const metadata = {
  title: "Cida Cabeleireira",
  description: "Landing page oficial",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${playfair.variable} ${dancingScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
