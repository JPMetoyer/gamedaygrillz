import { CartContext } from "@/utilities/cart";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const CartIcon = () => {

  const { products } = useContext(CartContext);

  return (
    <Link href="/cart" className="flex items-center gap-2">
       <Image src="/images/cart.svg" alt="" width={50}  height={50}/>
      <span className="text-[#9C34C2]">Cart</span>
      <span className="text-[#9C34C2]">{ products.length }</span>
    </Link>
  );
};

export default CartIcon;