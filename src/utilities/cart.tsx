"use client";

import React, { Context, createContext, useState } from "react";
import { Product } from "./data";

export const CartContext : Context<{ products: Product[], editCart: (item: Product | null, index?: number, clear?: boolean) => void }> = createContext({ products: [] as Product[], editCart: (item: Product | null, index?: number) => {}});


export function CartContextProvider({ children }: { children: React.ReactNode }) {

  const [products, setProducts] = useState<Product[]>([])

  const changeCart = (item: Product | null, index: number = -1, clear = false) => {

    setProducts((current) => {

      if (clear) { return [] }

      if (item === null) {

        if (index === -1) { return current; }

        return [...current.slice(0, index), ...current.slice(index + 1)];
      }

      return  [...current, item]
    });
  }

  return (
      <CartContext.Provider value={{ products: products, editCart: changeCart }}>
        { children }
      </CartContext.Provider>
  )
}

