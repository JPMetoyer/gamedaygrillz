import Image from 'next/image'
import Slider from './components/Slider'
// import Offer from './components/Offer'
import Featured from './components/Featured'
import "@/utilities/home.css"

export default function Home() {
  return (
    <main> 
      <Slider />
      <Featured/>
      {/* <Offer/> */}

      <section id="about" className='bg-fuchsia-50'>
        <div>
        <Image
          src={ "/images/bacon.png" }
          alt=""
          fill
          className="object-cover"
        />
        </div>
        <div>

        </div>
      </section>

    </main>
  )
}
