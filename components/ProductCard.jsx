import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
import Image from 'next/image'

// Fungsi untuk membuat array bintang berdasarkan rating
const renderStars = (rating) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={`text-yellow-400 ${
          i < Math.floor(rating) ? 'fill-current' : 'stroke-current'
        }`}
      >
        ★
      </span>
    )
  }
  return stars
}

const products = [
  {
    id: 1,
    image: '/images/product_1.png',
    brand: 'Steelo',
    name: 'Baju Bayi',
    price: 'Rp.75.000',
    rating: 4.5,
  },

  {
    id: 2,
    image: '/images/product_2.png',
    brand: 'Glasby',
    name: 'Gelas Balita Imut',
    price: 'Rp.175.000',
    rating: 4.8,
  },

  {
    id: 3,
    image: '/images/product_3.png',
    brand: 'Clevamama',
    name: 'Bantal dan Guling Khusus Bayi',
    price: 'Rp.125.000',
    rating: 4.2,
  },

  {
    id: 4,
    image: '/images/product_4.png',
    brand: 'Habbie',
    name: 'Aromaterapic Telon Oil',
    price: 'Rp.200.000',
    rating: 4.4,
  },

  {
    id: 5,
    image: '/images/product_5.png',
    brand: 'Pump It',
    name: 'Breast Pump',
    price: 'Rp.480.000',
    rating: 3.9,
  },

  {
    id: 6,
    image: '/images/product_6.png',
    brand: 'Lilla',
    name: 'The Bamboo Cotton Brief',
    price: 'Rp.370.000',
    rating: 5.0,
  },
  // Tambahkan data produk lainnya
]

const ProductCard = ({ id, image, brand, name, price, rating }) => (
  <div>
    <Card key={id} className="w-50 mr-4 flex justify-center">
      <CardHeader
        shadow={false}
        floated={false}
        className="h-[200px] w-[200px]"
      >
        <Image
          src={image}
          alt={`${brand} ${name}`}
          className="h-full w-full"
          width={200}
          height={200}
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 items-center">
          <Typography color="blue-gray" className="font-medium">
            {brand}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-large font-bold"
        >
          {name}
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-large font-bold"
        >
          {price}
        </Typography>
        <div className="flex items-center">
          <div className="mr-1">{renderStars(rating)}</div>
          <Typography color="blue-gray" className="font-medium">
            {rating}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  </div>
)

export default function ProductList() {
  return (
    <div className="flex">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
