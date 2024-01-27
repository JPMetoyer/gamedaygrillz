"use client";

import { CartContext } from "@/utilities/cart";
import { formatCreditCardNumber, formatDateString } from "@/utilities/number";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useMemo, useReducer, useState } from "react";

const CartPage = () => {


  function generateOrderId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const [orderID, setOrderID] = useState<undefined | string>(undefined)

  const [showCheckout, setShowCheckout] = useState(false); 
  const { products, editCart } = useContext(CartContext);

  // const [cardNumber, setCardNumber] = useState("");
  const [cardNumber, setCardNumber] = useReducer((state: string, action: string) => {
    const credit = formatCreditCardNumber(action);

    return credit;
  }, "");

  // const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useReducer((state: string, action: string) => {

    return formatDateString(action);
  }, "");

  // const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCVC] = useReducer((state: string, action: string) => {

    const digitsOnly = action.replace(/\D/g, '').substring(0, 3);
    return digitsOnly;
  }, "");


  const checkout = () => {
    setShowCheckout(false);
    setOrderID(generateOrderId());
    editCart(null, 0, true);
  }


  const getTotal = useMemo(() => {

    if (products.length == 0) { return 0 }

    const total = products.map((item) => item.price).reduce((acc, current) => acc + current);
    return total;

  }, [products]);

  return (
    <div id="cart-grid" className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-9rem)]  text-red-500">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40" style={{ width: "100%" }}>
        {
          products.length == 0 &&
          <>
            <h1 className="text-2xl text-center uppercase p-4 md:p-5 md:text-3xl xl:text-4xl">{ orderID == undefined ? "No Items in Cart" : `Order #${ orderID } placed` }</h1>

            {
              orderID !== undefined &&
              <p>Show this order ID to our reptionist in store at Game Day Grillz - 700 Morse RD Ste, 201, Columbus Ohio.</p>
            }

            {
              orderID == undefined &&
              <Link style={{ maxWidth: "max-content", margin: "0px auto" }} className="p-3 rounded bg-red-500 text-white justify-self-center" href={ "/menu/burger" }>Add Items</Link>
            }
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
      <div style={{ width: "100%" }} className=" p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
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
        <button onClick={() => setShowCheckout((current) => !current) } disabled={ products.length === 0 } className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          { showCheckout ? "Cancel Order" : "Checkout" }
        </button>

          <hr />

        {
          showCheckout &&
          <>
          <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", margin: "2rem 0px", gap: "1rem 1rem" }} id="checkout">
            {/*  */}
            <div style={{ gridColumn: "span 2" }} className="flex-grow">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                value={cardNumber}
                onChange={(event) => {
                  setCardNumber(event.target.value);
                }}
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " />
                <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Card Number
              </label>
            </div>
            </div>  


            <div className="flex-grow">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                value={expiryDate}
                onChange={(event) => {
                  setExpiryDate(event.target.value);
                }}
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " />
                <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Valid Through
              </label>
            </div>
            </div> 


            <div className="flex-grow">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                value={cvc}
                onChange={(event) => {
                  setCVC(event.target.value);
                }}
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                placeholder=" " />
                <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">CVC
              </label>
            </div>
            </div> 



          </section>

          <button onClick={() => checkout() } disabled={ cvc.length !== 3 || cardNumber.length !== 19 || expiryDate.length !== 5 || products.length === 0 } className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">Complete Purchase</button>
          </>
        }
      </div>

    </div>
  );
};

export default CartPage;