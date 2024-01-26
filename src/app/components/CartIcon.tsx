import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-2">
       <Image src="/images/cart.svg" alt="" width={50}  height={50}/>
      <span className="text-[#9C34C2]">Cart</span>
    </Link>
  );
};

export default CartIcon;