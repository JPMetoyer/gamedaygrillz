import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    
    <div className='overhead'>

<div className="container-holder">
    <div className="item-container">
       <div className="img-container">
       <Image
       src="/images/tasting.png"
       alt=""
       className="object-contain"
       fill
     />
       </div>

       <div className="body-container">
           <div className="overlay"></div>

           <div className="event-info">
               <p className="title">Burger Tasting Event</p>
               <div className="separator"></div>
               <p className="info">Game Day Grillz</p>
               <p className="price">Free</p>

               <div className="additional-info">
                   <p className="info">
                       <i className="fas fa-map-marker-alt"></i>
                       700 Morse RD Ste, 201, Columbus Ohio.                   </p>
                   <p className="info">
                       <i className="far fa-calendar-alt"></i>
                       Sat, Sep 19, 10:00 AM EDT
                   </p>

                   <p className="info description">
                   Join us for an unforgettable culinary experience as we savor the finest gourmet burgers at our burger tasting extravaganza.
                   </p>
               </div>
           </div>
           <button className="action">Book it</button>
       </div>
   </div>

   <div className="item-container">
       <div className="img-container">
       <Image
       src="/images/retro.png"
       alt=""
       className="object-contain"
       fill
     />
       </div>

       <div className="body-container">
           <div className="overlay"></div>

           <div className="event-info">
               <p className="title">Retro Burger Night</p>
               <div className="separator"></div>
               <p className="info">Game Day Grillz</p>
               <p className="price">5$</p>

               <div className="additional-info">
                   <p className="info">
                       <i className="fas fa-map-marker-alt"></i>
                       700 Morse RD Ste, 201, Columbus Ohio.                   </p>
                   <p className="info">
                       <i className="far fa-calendar-alt"></i>
                       Sat, Sep 19, 10:00 AM EDT
                   </p>

                   <p className="info description">
                   Travel back in time to the era of jukeboxes and poodle skirts at our Retro Burger Night, where you can enjoy classic burgers with a nostalgic twist.






                   </p>
               </div>
           </div>
           <button className="action">Book it</button>
       </div>
   </div>

   <div className="item-container">
       <div className="img-container">
       <Image
       src="/images/img3.jpg"
       alt=""
       className="object-contain"
       fill
     />
       </div>

       <div className="body-container">
           <div className="overlay"></div>

           <div className="event-info">
               <p className="title">Live Music Night</p>
               <div className="separator"></div>
               <p className="info">Game Day Grillz</p>
               <p className="price">10$</p>

               <div className="additional-info">
                   <p className="info">
                       <i className="fas fa-map-marker-alt"></i>
                       700 Morse RD Ste, 201, Columbus Ohio.                   </p>
                   <p className="info">
                       <i className="far fa-calendar-alt"></i>
                       Sat, Sep 19, 10:00 AM EDT
                   </p>

                   <p className="info description">
                   Indulge in delicious burgers while grooving , where the beats & flavors come together for a fun dining experience.






                   </p>
               </div>
           </div>
           <button className="action">Book it</button>
       </div>
   </div>

   <div className="item-container">
       <div className="img-container">
       <Image
       src="/images/charity.png"
       alt=""
       className="object-contain"
       fill
     />
       </div>

       <div className="body-container">
           <div className="overlay"></div>

           <div className="event-info">
               <p className="title">Charity Burger Cook Off</p>
               <div className="separator"></div>
               <p className="info">Game Day Grillz</p>
               <p className="price">4$</p>

               <div className="additional-info">
                   <p className="info">
                       <i className="fas fa-map-marker-alt"></i>
                       700 Morse RD Ste, 201, Columbus Ohio.                   </p>
                   <p className="info">
                       <i className="far fa-calendar-alt"></i>
                       Sat, Sep 19, 10:00 AM EDT
                   </p>

                   <p className="info description">
                   Savor mouthwatering burgers at our Charity Burger Cook-Off!

                   </p>
               </div>
           </div>
           <button className="action">Book it</button>
       </div>
   </div>
</div>
    


    </div>

    
  )
}

export default page
