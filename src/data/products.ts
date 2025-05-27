import tshirt from '../assets/white-neww2.jpeg'
import back from '../assets/white-neww.jpeg'
import tshirtBoy from '../assets/tshirtboy2.jpeg'
import tshirtback from '../assets/tshirtback.jpeg'
import brown from "../assets/brown1.jpeg"
import brown2 from "../assets/brown2.jpeg"
import brownBoy1 from "../assets/brown-boy1.jpeg"
import brownBoy2 from "../assets/brown-boy2.jpeg"
import blue1 from "../assets/blue1.jpeg"
import blue2 from "../assets/blue2.jpeg"
import blueBoy1 from "../assets/blue-boy1.jpeg"
import blueBoy2 from "../assets/blue-boy2.jpeg"
import black1 from "../assets/black1.jpeg"
import black2 from "../assets/black2.jpeg"
import blackBoy1 from "../assets/black-boy1.jpeg"
import blackBoy2 from "../assets/black-boy2.jpeg"

interface Product {
  id: number;
  name: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  price: number;
  offerPrice: number;
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Holy Faith Overized Tee",
    description1: "100% Cotton",
    description2: "240 GSM",
    description3: "French Terry",
    description4: "Colour: Black",
    price: 699,
    offerPrice:499,
    images: [
      black1,
      black2,
      blackBoy1,
      blackBoy2
    ]
  }
  ,
  {
    id: 2,
    name: "Final Pulse Oversized Tee",
    description1: "100% Cotton",
    description2: "240 GSM",
    description3: "French Terry",
    description4: "Colour: Coffee Brown",
    price: 699,
    offerPrice:499,
    images: [
      brown,
      brown2,
      brownBoy1,
      brownBoy2
    ]
  },
  {
    id: 3,
    name: "Fearless Oversized Tee",
    description1: "100% Cotton",
    description2: "240 GSM",
    description3: "French Terry",
    description4: "Colour: Royal Blue",
    price: 699,
    offerPrice:499,
    images: [
      blue1,
      blue2,
      blueBoy1,
      blueBoy2
    ]
  },
  {
    id: 4,
    name: "Thypex Urban Oversized Tee",
    description1: "100% Cotton",
    description2: "240 GSM",
    description3: "French Terry",
    description4: "Colour: Off-white",
    price: 499,
    offerPrice: 349,
    images: [
      tshirt,
      back,
      tshirtBoy,
      tshirtback
    ]
  },
  ];