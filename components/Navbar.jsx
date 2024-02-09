import React, { useState, useEffect } from 'react'
import logo from '../public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'

export default function Navbar() {
  return (
    <div className="fixed w-full h-[150px] bg-primary z-10">
      <header className="h-full ml-[80px] px-20 flex items-center justify-between">
        <div style={{ height: 81 }} className="flex">
          <Image src={logo} alt="logo"></Image>
        </div>

        <input
          type="text"
          className="w-[950px] h-[50px] ml-[10px] rounded-lg shadow-lg"
          placeholder="Search"
        />

        <ul className="flex space-x-[80px]">
          <li>
            <Link href="/">
              <MdOutlineShoppingBag color="white" size={35} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <IoMdNotificationsOutline color="white" size={38} />
            </Link>
          </li>
          <Link href="/" className="px-4 py-2 text-black bg-peach rounded-md">
            Sign In
          </Link>
          <li></li>
        </ul>
      </header>

      <nav className="fixed top-[115px] left-[435px]">
        <ul className="flex space-x-[60px]">
          <li>
            <Link href="/" className="text-white">
              Filter
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white">
              Produk terbaru
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white">
              Costumer Service
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white">
              Tentang Kami
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
