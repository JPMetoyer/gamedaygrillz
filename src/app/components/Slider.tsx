"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Gather 'Round for the Best Burgers & Sports Action at Game Day Grill",
    image: "/images/main.png",
  },
  {
    id: 2,
    title: "Home of the MVP (Most Valuable Patties)",
    image: "/images/mvpburger.png",
  },
  {
    id: 3,
    title: "Touchdown Tastes in Every Burger ",
    image: "/images/touchdown.png",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>

        <div style={{ display: "flex", gap: "1rem" }}>

        <Link href="/menu/burgers" className="bg-red-500 text-white py-4 px-8">Order Now</Link>
        <Link href="/reservation" className="bg-white text-red-500 py-4 px-8">Reserve a Table</Link>
        </div>

      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;