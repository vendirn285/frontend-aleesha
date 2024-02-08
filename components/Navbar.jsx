import React, { useState, useEffect } from 'react'
import logo from '../public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { IoMdNotificationsOutline } from 'react-icons/io'

export default function Navbar() {
  const [rotate, setRotate] = useState(false)

  useEffect(() => {
    if (rotate) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [rotate])

  return (
    <div className="w-full bg-primary h-[120px]">
      <div className="max-w-screen 2xl h-full mx auto px-4 flex justify-between">
        <div className="fixed top-5 left-[70px]">
          <Image src={logo} alt="Logo" height={80} />
        </div>
        <div>
          <input
            type="text"
            className="w-[610px] fixed top-10 left-96 h-9 rounded-lg shadow-lg"
            placeholder="Search"
          />

          <nav className="fixed left-[385px] top-[85px]">
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
        <div className="fixed right-[70px] top-[45px] right-[70px]">
          <ul className="flex space-x-[80px]">
            <li>
              <Link href="/">
                <MdOutlineShoppingBag color="white" size={35} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <IoMdNotificationsOutline color="white" size={35} />
              </Link>
            </li>
            <Link href="/" className="px-4 py-2 text-black bg-peach rounded-md">
              Sign In
            </Link>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
