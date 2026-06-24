import Head from 'next/head'
import Hero from '../components/Hero'
import SignatureCollection from '../components/SignatureCollection'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <>
      <Head>
        <title>DIABOLICAL — Where Desire Meets Luxury</title>
        <meta name="description" content="Luxury Fragrances Crafted To Tempt." />
      </Head>

      <main className="min-h-screen">
        <Hero />
        <SignatureCollection />
        <About />
        <Testimonials />
        <Newsletter />
      </main>
    </>
  )
}
