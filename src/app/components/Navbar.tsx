"use client"

import React, { useState } from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import '../../app/styles.scss'

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsInitialRender(false);
  };
  
  return (

    <header>

      <div className="hidden custom:flex  justify-around py-[15px] items-center" >
        <Link href="/" className="flex flex-row items-center justify-center">

          <Image src="/images/grillicon.svg" alt=""  width={50} height={50}/>
          <h3 className="text-[24px] text-[#9C34C2]">Game Day Grillz</h3>

        </Link>

        <div className="flex flex-row gap-4">

          <Link href="/" className="text-[17px] custom-link">Home</Link>
          <Link href="/menu/burgers" className="text-[17px] custom-link">Menu</Link>
          <Link href="/events" className="text-[17px] custom-link ">Events</Link>
          <Link href="/reservation" className="text-[17px] custom-link ">Reservation</Link>

        </div>

        <CartIcon />


       
              



          </div>

         {/* mobile */}

         <div className=" flex custom:hidden  justify-around py-[15px] items-center">
            <Link href="/" className="flex flex-row items-center justify-center">
              <Image src="/images/grillicon.svg" alt=""  width={50} height={50}/>
              <h3 className="text-[24px] text-[#9C34C2]">Game Day Grillz</h3>
            </Link>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            
            <Image src="images/menuicon.svg"  alt="icon of menu button" width={50} height={50}/>
        </button>
          </div>










          <div className={`menu-panel ${isMobileMenuOpen ? 'flex' : 'hidden'} custom:hidden`}>
          <Link href="/" className="flex flex-row items-center justify-center">

            <Image src="/images/grillicon.svg" alt=""  width={50} height={50}/>
            <h3 className="text-[20px] text-[#9C34C2]">Game Day Grillz</h3>

          </Link>

          <div className="flex flex-col gap-8 items-center">

            <Link href="/" className="text-[17px] custom-link">Home</Link>
            <Link href="/menu/burgers" className="text-[17px] custom-link">Menu</Link>
            <Link href="/events" className="text-[17px] custom-link ">Events</Link>
            <Link href="/reservation" className="text-[17px] custom-link ">Reservation</Link>

          </div>

          <div>
          <CartIcon />

          </div>

      
      </div>
      
    </header>
   
    

    
  );
};

export default Navbar;