import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navigation/navbar'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className=" bg-white text-black flex min-h-screen flex-col items-center justify-between p-4">
  <Navbar />
    </main>
  )
}
