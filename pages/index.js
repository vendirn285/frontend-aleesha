import React from 'react'
import Navbar from '@/components/Navbar'
import CarouselTransition from '@/components/CarouselTransition'
import ProductCard from '@/components/ProductCard'

export default function index() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <CarouselTransition />
      </div>
      <div>
        <ProductCard />
      </div>
    </main>
  )
}
