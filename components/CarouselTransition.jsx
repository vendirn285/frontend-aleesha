import React from 'react'
import { Carousel } from '@material-tailwind/react'
import Image from 'next/image'

export default function CarouselTransition() {
  return (
    <div className="fixed left-[140px] top-[160px] ">
      <div className="fixed">
        <Carousel
          transition={{ duration: 2 }}
          className="fixed left-[190px] w-9/12"
        >
          <Image
            src="/images/carousel_1.png"
            alt="image 1"
            className="flex justify-center items-center h-auto w-[1245px] object-cover"
            width={1245}
            height={555}
            priority={true}
          />
          <Image
            src="/images/carousel_2.png"
            alt="image 2"
            className="flex justify-center items-center h-auto w-[1245px] object-cover"
            width={1245}
            height={555}
          />
          <Image
            src="/images/carousel_3.png"
            alt="image 3"
            className="flex justify-center items-center h-auto w-[1245px] object-cover"
            width={1245}
            height={555}
          />
        </Carousel>
      </div>
    </div>
  )
}
