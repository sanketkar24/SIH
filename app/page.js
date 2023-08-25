import Image from 'next/image'
import './page.css'
import CoverPage from './components/CoverPage/page.js'
export default function Home() {
  return (
    <div className='landingPage'>
      < CoverPage />
    </div>
  )
}
