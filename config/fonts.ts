import { Fira_Code as FontMono, Inter as FontSans, Poppins, El_Messiri } from "next/font/google"

export const fontSans = FontSans({
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const poppins = Poppins({
  weight: '300',
  subsets: ['latin-ext'],
  style: 'normal',
  display: 'swap',
  variable: '--font-poppins',
})

export const messiri = El_Messiri({
  weight: '600',
  subsets: ['arabic'],
  variable: '--font-messiri'
})