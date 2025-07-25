import "../styles/global.scss";
import "../helpers/font";
import { emilysCandy,lexend,nunito,facultyGlyphic } from "../helpers/font";


export const metadata = {
  title: {
    template: `%s | MOKİTA `,
    default: "MOKİTA",
  },
  description: "Mokita's book recommendations",

  description: "Mokita's book recommendations",
  icons: {
    icon: "/icon/icon.png",
    shortcut: "/icon/icon.png",
    apple: "/icon/icon.png",
  },
};

export default function RootLayout({children }) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${nunito.variable} ${facultyGlyphic.variable} ${emilysCandy.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
