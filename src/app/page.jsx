import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header'
import Intro from './components/intro'
import MainOne from './components/mainOne'
import MainTwo from './components/mainTwo'
import Footer from './components/footer'

export default function Home() {
  return (
    <main>
      <div>
       <Header/>
       <Intro />
       <MainOne />
       <MainTwo />
       <Footer />
      </div>
    </main>
  )
}
