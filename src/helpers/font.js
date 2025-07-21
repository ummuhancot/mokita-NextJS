import { Lexend, Nunito,Faculty_Glyphic ,Emilys_Candy,} from "next/font/google";

//eger butun lexend turevlerini istiyorsak
// const lexend = Lexend();
export const lexend = Lexend({
  subsets: ["latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-lexend",
});

export const nunito = Nunito({
  subsets: ["latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-nunito",
});

export const facultyGlyphic = Faculty_Glyphic({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-facultyglyphic", 
});

export const emilysCandy = Emilys_Candy({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-emilyscandy",
});

