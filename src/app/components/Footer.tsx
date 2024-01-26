import Link from "next/link";
import React from "react";
import "../../app/styles.scss"

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-around gap-3 h-auto md:h-[12rem] items-end pb-4 footer">
      <h3 className="text-white text-center md:text-left">
        Game Day Grillz - 700 Morse RD Ste, 201, Columbus Ohio.
      </h3>

      <div className="flex flex-col md:flex-row gap-2 text-white text-center md:text-left">
        <p>
          contact@gamedaygrillz.com
        </p>
        <span className="hidden md:inline">-</span>
        <p>
          123-456-7890
        </p>
      </div>

      <p className="text-white text-center md:text-left">
        © ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
};

export default Footer;
