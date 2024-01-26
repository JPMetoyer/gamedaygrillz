"use client"

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Inter } from 'next/font/google'
import './globals.css'
import { Context, createContext } from 'react'
import { CartContextProvider } from '@/utilities/cart'

const inter = Inter({ subsets: ['latin'] });






export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>
        <Navbar />
          {children}
          <Footer />
        </CartContextProvider>
        </body>
    </html>
  )
}
