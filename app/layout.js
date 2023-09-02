import './globals.css'
import Navbar from "./components/navigation/navbar";
import Footer from './components/footer'
import localFont  from '@next/font/local'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        < Footer />
      </body>  
    </html>
  )
}
