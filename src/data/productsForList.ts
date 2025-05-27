import tshirt from '../assets/white-new-main.jpeg'
import brown from '../assets/brown-main.jpeg'
import blue from '../assets/blue-main.jpeg'
import black from '../assets/black-main.jpeg'

interface Product {
  id: number;
  name: string;
  description1: string;
  price: number;
  offerPrice: number;
  image: string;
}

export const productsForList: Product[] = [
  {
    id: 1,
    name: "Holy Faith Oversized Tee",
    description1: "Timeless black t-shirt made from premium cotton",
    price: 699,
    offerPrice:499,
    image: black
  },
  {
    id: 2,
    name: "Final Pulse Oversized Tee",
    description1: "Timeless black t-shirt made from premium cotton",
    price: 699,
    offerPrice:499,
    image: brown
  },
  {
    id: 3,
    name: "Fearless Oversized Tee",
    description1: "Timeless black t-shirt made from premium cotton",
    price: 699,
    offerPrice:499,
    image: blue
  },
  {
    id: 4,
    name: "Thypex Urban Overized Tee",
    description1: "Essential cotton crew neck t-shirt in pristine off-white",
    price: 499,
    offerPrice:349,
    image: tshirt
  },
];