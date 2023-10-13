import NavBar from './components/NavBar'
import './globals.css'
import { Inter, Luckiest_Guy } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  variable: "--font-luckiest-guy",
  weight: "400"
})
export const metadata = {
  title: 'Todoapps',
  description: 'Todoapps descrption',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ `${luckiestGuy.variable}`}>
      <NavBar/>{children}</body>
    </html>
  )
}
