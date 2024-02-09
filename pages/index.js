import React from 'react'
import Navbar from '@/components/Navbar'
import CarouselTransition from '@/components/CarouselTransition'
import ProductCard from '@/components/ProductCard'
import ImageCategory from '@/components/ImageCategory'
import Head from 'next/head'

export default function index() {
  return (
    <>
      <Head>
        <title>Aleesha</title>
      </Head>

      <main>
        <section>
          <div className="container">
            <Navbar></Navbar>
          </div>
        </section>
        <section>
          <div className="container mx-auto pt-[250px]">
            <CarouselTransition></CarouselTransition>
          </div>
        </section>
        <section className="container mx-auto pt-20">
          <div>
            <ImageCategory></ImageCategory>
          </div>
        </section>
        <section className="container mx-auto pt-20">
          <ProductCard />
        </section>
      </main>
    </>
  )
}
