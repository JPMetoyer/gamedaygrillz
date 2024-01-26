"use client";

import { CartContext } from "@/utilities/cart";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useMemo } from "react";

const CartPage = () => {

  const { products, editCart } = useContext(CartContext);

  const getTotal = useMemo(() => {

    if (products.length == 0) { return 0 }

    const total = products.map((item) => item.price).reduce((acc, current) => acc + current);
    return total;

  }, [products]);

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {
          products.length == 0 &&
          <>
            <h1 className="text-2xl text-center uppercase p-4 md:p-5 md:text-3xl xl:text-4xl">No items in cart</h1>
            <Link style={{ maxWidth: "max-content", margin: "0px auto" }} className="p-3 rounded bg-red-500 text-white justify-self-center" href={ "/menu" }>Add Items</Link>
          </>
        }

        { products.map((item, index) => (
         <div key={ item.id } className="flex items-center justify-between mb-4">
         <Image src={ item.img ? item.img : "/images/burger.png" } alt="" width={100} height={100} />
         <div className="">
           <h1 className="uppercase text-xl font-bold">{ item.title }</h1>
           <span>{ item.options[0].title }</span>
         </div>
         <h2 className="font-bold">${ item.price }</h2>
         <span
          onClick={ () => editCart(null, index) }
          className="cursor-pointer">X</span>
        </div>
        )) }
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal ({ products.length } items)</span>
          <span className="">${ getTotal.toFixed(2) }</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL</span>
          <span className="font-bold">${ getTotal.toFixed(2) }</span>
        </div>
        <button disabled={ products.length === 0 } className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;