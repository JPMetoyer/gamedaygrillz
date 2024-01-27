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
        <div className='graphic' style={{ position: "relative" }}>
        <Image
          src={ "/images/grill.png" }
          alt=""
          fill
          className="object-cover"
        />
        </div>
        <div className='content'>
        <h1 className="text-3xl text-center uppercase p-2 md:p-7 md:text-4xl xl:text-4xl text-red-500">
         Great Grillz & Glory at Game Day Grill
        </h1>

        <p>Welcome to Game Day Grill, where every meal is a touchdown of taste! Experience the ultimate blend of gourmet burgers, crafted with the freshest ingredients, in a vibrant, sports-themed ambiance. At Game Day Grill, we're not just serving food; we're creating an unforgettable dining adventure, perfect for both the casual diner and the sports enthusiast alike. Join us and savor the victory of flavor on your plate!</p>
        </div>
      </section>

    </main>
  )
}
