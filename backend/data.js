import bcrypt from "bcryptjs";
const data = {
  users:[
    {
      name: "Izzet",
      email: "izzetates85@gmail.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: true,
    },{
      name: "Tugba",
      email: "tugba@gmail.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: false,
    }
  ],
  products: [
    {
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 3,
      numReviews: 10,
      description: "high quality product"
    },
    {
      name: "Adidas Fit Shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 100,
      countInStock: 15,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product"
    },

    {
      name: "Lacoste Free Shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 220,
      countInStock: 0,
      brand: "Lacoste",
      rating: 4.8,
      numReviews: 17,
      description: "high quality product"
    },
    {
      name: "Nike Slim Pant",
      category: "Pants",
      countInStock: 18,
      image: "/images/p4.jpg",
      price: 78,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product"
    },

    {
      name: "Puma Slim Pant",
      category: "Shirts",
      image: "/images/p5.jpg",
      price: 120,
      countInStock: 40,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product"
    },
    {
      name: "Adidas Fit Pant",
      category: "Pant",
      image: "/images/p6.jpg",
      price: 139,
      countInStock: 50,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 15,
      description: "high quality product"
    }
  ]
};
export default data;
