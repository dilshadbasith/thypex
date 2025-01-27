import tshirt from '../assets/land3.jpeg'

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  offerPrice: number;
  image: string;
}

export const productsForList: Product[] = [
  {
    id: 1,
    name: "Thypex Urban Overized Tee",
    description: "Essential cotton crew neck t-shirt in pristine off-white",
    price: 699,
    offerPrice:499,
    image: tshirt
  },
  // {
  //   id: 2,
  //   name: "Black Basic Tee",
  //   description: "Timeless black t-shirt made from premium cotton",
  //   price: 649,
  //   image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800"
  // },
  // {
  //   id: 3,
  //   name: "Navy Striped T-Shirt",
  //   description: "Stylish navy and white striped pattern t-shirt",
  //   price: 799,
  //   image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800"
  // },
  // {
  //   id: 4,
  //   name: "Grey Melange T-Shirt",
  //   description: "Comfortable grey melange t-shirt for casual wear",
  //   price: 699,
  //   image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800"
  // }
];