import "../styles/global.scss";



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
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
