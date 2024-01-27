"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Gather 'Round for the Best Burgers & Sports Action at Game Day Grill",
    image: "/images/main.png",
    description: "Immerse yourself in the ultimate game day experience with our signature burgers, each a masterpiece of flavor. At Game Day Grill, we blend the thrill of sports with culinary excellence, offering a vibrant spot to cheer for your team and indulge in the best burgers in town. It's not just a meal; it's a celebration of sports and good taste!"
  },
  {
    id: 2,
    title: "Home of the MVP (Most Valuable Patties)",
    image: "/images/mvpburger.png",
    description: "Step up to the big leagues of flavor with our MVP Burgers, where quality and taste take the center field. Crafted from the finest ingredients and cooked to perfection, these patties are the stars of our menu. Whether you're craving a classic cheeseburger or something uniquely gourmet, our MVP selection is sure to score big with your taste buds!"
  },
  {
    id: 3,
    title: "Touchdown Tastes in Every Burger ",
    image: "/images/touchdown.png",
    description: "Experience the rush of a touchdown with every bite of our specially crafted burgers at Game Day Grill. Perfectly grilled and stacked with the freshest toppings, our burgers are a game-changer in taste and quality. Join us for a culinary touchdown that satisfies your hunger and your love for the game!"
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
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold p-16">
        <h1 className="text-3xl text-center uppercase p-4 md:p-7 md:text-4xl xl:text-5xl">
          {data[currentSlide].title}
        </h1>

        <p>{ data[currentSlide].description }</p>

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