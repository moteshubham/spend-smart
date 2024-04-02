import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Comparison from "./Comparison"
import ProductDetails from "./ProductDetails"

import SortedProductList from "./QueriedProductList"
//import { Context } from "../App"

const ProductPage = () => {
  console.log("motemotmeotmeotmeotmeomo")
  const baseUrl ="http://localhost:3000" || import.meta.env.VITE_BACKEND_URL 
  const paramId = useParams().id
  const [selectedProduct, setSelectedProduct] = useState(1)
  const [queriedProducts, setQueriedProducts] = useState([])

  // const dataArr = [  
  //   {
  //     "id": 1,
  //     "name": "iPhone 13 (512GB)",
  //     "productLink": "https://amzn.eu/d/5TtowNo",
  //     "isIphone": 1,
  //     "description": "The iPhone 13, introduced in 2021, features a ceramic shield front, textured matte glass, and stainless steel design. It has a 6.06-inch display with rounded corners and supports Apple Pay, Apple Cash, and Siri. The phone runs on iOS 15 and is equipped with advanced accessibility features. ",
  //     "price": 79900,
  //     "category": "Mobile",
  //     "imageUrl": "https://i.ibb.co/Jpjf6md/iphone-13.jpg",
  //     "tags": "apple iphone13 mobile"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Sony PS5 Console",
  //     "productLink": "https://amzn.eu/d/cUHhgvt",
  //     "isIphone": 0,
  //     "description": "Immerse yourself in worlds with a new level of realism as rays of light are individually simulated, creating true-to-life shadows and reflections in supported PS5 games.",
  //     "price": 54990,
  //     "category": "Gaming",
  //     "imageUrl": "https://i.ibb.co/gSjMHDK/ps5.jpg",
  //     "tags": "gaming playstation console"
  //   },
  //   {
  //     "id": 3,
  //     "name": "iPhone 13 Pro Max (512GB)",
  //     "productLink": "http://tinyurl.com/29l4sgtr",
  //     "isIphone": 1,
  //     "description": "iPhone 13. boasts an advanced dual-camera system that allows you to click mesmerising pictures with immaculate clarity. Furthermore, the lightning-fast A15 Bionic chip allows for seamless multitasking, elevating your performance to a new dimension. A big leap in battery life, a durable design, and a bright Super Retina XDR display facilitate boosting your user experience.",
  //     "price": 149990,
  //     "category": "Mobile",
  //     "imageUrl": "https://i.ibb.co/CJ68Xm4/iphone-13-pro-max.jpg",
  //     "tags": "apple iphone13 mobile"
  //   },
  //   {
  //     "id": 4,
  //     "name": "JBL Go 3, Bluetooth Speaker",
  //     "productLink": "https://amzn.eu/d/68JcMRF",
  //     "isIphone": 0,
  //     "description": "Ultimate JBL Pro Sound: Enjoy signature JBL bass without any distortion. Port-anywhere: Feather light, ultra-portable grab-and-go design. Charging Time: 2.5 Hrs",
  //     "price": 2999,
  //     "category": "Speaker",
  //     "imageUrl": "https://i.ibb.co/RgyxNk1/jblgo3.jpg",
  //     "tags": "speaker jbl electronics"
  //   },
  //   {
  //     "id": 5,
  //     "name": "iPhone 14 Plus  (512GB)",
  //     "productLink": "https://amzn.eu/d/aC17b5B",
  //     "isIphone": 1,
  //     "description": "Stay productive and improve your performance with the Super Retina XDR display that is comfortable for the eyes. Powered with a 12 MP main camera, enjoy taking pictures with friends and family. With a built-in rechargeable lithium-ion battery and equipped with the MagSafe wireless charging.",
  //     "price": 99900,
  //     "category": "Mobile",
  //     "imageUrl": "https://i.ibb.co/68238jV/iphone-14-plus.jpg",
  //     "tags": "apple iphone14 mobile"
  //   },
  //   {
  //     "id": 6,
  //     "name": "Spellbinding Shimla, Manali & Chandigarh",
  //     "productLink": "https://rb.gy/tei62i",
  //     "isIphone": 0,
  //     "description": "Experience the enchantment of Shimla, Manali, and Chandigarh with our 6-night tour package. Discover snow-covered landscapes, picturesque views, and rich culture. ",
  //     "price": 36207,
  //     "category": "Tour",
  //     "imageUrl": "https://i.ibb.co/YkDVrm6/manali-tour.jpg",
  //     "tags": "tour trip manali"
  //   },
  //   {
  //     "id": 7,
  //     "name": "ASUS Vivobook 15",
  //     "productLink": "https://amzn.eu/d/7Xa0DQu",
  //     "isIphone": 0,
  //     "description": "Windows 11 Home with lifetime validity | Software Included: Pre-Installed Office Home and Student 2021 | 1-Year McAfee Anti-Virus",
  //     "price": 28000,
  //     "category": "Laptop",
  //     "imageUrl": "https://i.ibb.co/WVhvNhf/Asus-Vivobook-15-OLED-review-1.jpg",
  //     "tags": "laptop asus"
  //   },
  //   {
  //     "id": 8,
  //     "name": "iPhone 15 Pro Max  (512GB)",
  //     "productLink": "https://amzn.eu/d/5ccjJiF",
  //     "isIphone": 1,
  //     "description": "The iPhone 15 Pro Max stands out as the highest-end device in Apple's latest flagship iPhone 15 series. It offers an expansive ProMotion XDR display with a 120Hz refresh rate. The A17 Pro chip is among the most powerful chipsets out there, capable of handling most daily as well as heavy-duty tasks with ease. ",
  //     "price": 179900,
  //     "category": "Mobile",
  //     "imageUrl": "https://i.ibb.co/mbMMNVf/iphone-15-pro-max.jpg",
  //     "tags": "apple iphone15 mobile"
  //   },
  //   {
  //     "id": 9,
  //     "name": "Philips Digital Oven, 25 Litre, 1500 Watt",
  //     "productLink": "https://amzn.eu/d/0GyvJdz",
  //     "isIphone": 0,
  //     "description": "Uniform cooking on all sides and even-browning in bread & cakes with No dark spots, perfect output",
  //     "price": 8999,
  //     "category": "Home Appliance",
  //     "imageUrl": "https://i.ibb.co/KrfZj5C/oven.jpg",
  //     "tags": "oven electronics cooking"
  //   },
  //   {
  //     "id": 10,
  //     "name": "Fully Loaded Bali with Premium Stay",
  //     "productLink": "https://rb.gy/837ygk",
  //     "isIphone": 0,
  //     "description": "Escape to paradise with our 6-night Bali tour package, offering a premium stay experience at a 5-star resort. Indulge in daily breakfast, enjoy a traditional Balinese dinner, and embark on exciting inclusions. This fully loaded package ensures an unforgettable Bali getaway.",
  //     "price": 78983,
  //     "category": "Tour",
  //     "imageUrl": "https://i.ibb.co/bXfF1hh/bali-tour.jpg",
  //     "tags": "tour trip bali"
  //   },
  //   {
  //     "id": 11,
  //     "name": "TVS Raider 125",
  //     "productLink": "https://www.bikewale.com/tvs-bikes/raider-125/",
  //     "isIphone": 0,
  //     "description": "The Raider 125 from TVS is a lovely entry-level commuter motorcycle. With its sporty styling and feature loaded nature, the Raider 125 makes so much sense for a market like India.",
  //     "price": 97000,
  //     "category": "Vehicle",
  //     "imageUrl": "https://i.ibb.co/DWK4Cg3/tvs-raider.jpg",
  //     "tags": "bike tvs vehivle riding"
  //   },
  //   {
  //     "id": 12,
  //     "name": "iPhone 15  (512GB)",
  //     "productLink": "https://amzn.eu/d/1I38Lpx",
  //     "isIphone": 1,
  //     "description": "Sure, the iPhone 15 may seem like it costs a pretty penny, but it brings a lot of important Apple tech such as USB Type-C, 48MP camera, Dynamic Island and the A16 Bionic chip. Despite the lack of a telephoto camera on the iPhone 15, its computational photography prowess helps it be one of the best camera phones for the price point. ",
  //     "price": 99900,
  //     "category": "Mobile",
  //     "imageUrl": "https://i.ibb.co/DLSST0n/iphone-15.jpg",
  //     "tags": "apple iphone15 mobile"
  //   },
  //   {
  //     "id": 13,
  //     "name": "iPhone 13 Pro  (512GB)",
  //     "productLink": "http://tinyurl.com/2a68yngg",
  //     "isIphone": 1,
  //     "description": "A more vivid OLED display that�s both easier to see in full sunlight and power efficient. With a durable design that�s water and dust-resistant.",
  //     "price": 13900,
  //     "category": "Mobile",
  //     "imageUrl": "https://i.ibb.co/W315WyP/iphone-13-pro.jpg",
  //     "tags": "apple iphone13 mobile"
  //   },
  //   {
  //     "id": 14,
  //     "name": "NIKE Mens Air Shoe",
  //     "productLink": "https://amzn.eu/d/iig4hiV",
  //     "isIphone": 0,
  //     "description": "The Nike Mens Air Zoom Pegus Flyease Shoe is designed for ultimate comfort and performance. Featuring a Flyease entry system for easy on and off, a breathable mesh upper.",
  //     "price": 8824,
  //     "category": "Apparel",
  //     "imageUrl": "https://i.ibb.co/phbKgQG/nike-air.jpg",
  //     "tags": "shoe nike apparel"
  //   },
  //   {
  //     "id": 15,
  //     "name": "iPhone 15 Pro  (512GB)",
  //     "productLink": "https://amzn.eu/d/fAK2CRs",
  //     "isIphone": 1,
  //     "description": "FORGED IN TITANIUM � iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that�s tougher than any smartphone glass. And it�s splash, water, and dust resistant.",
  //     "price": 158990,
  //     "category": "Mobile",
  //     "imageUrl": "https://i.ibb.co/HG4yTkS/iphone-15-pro.jpg",
  //     "tags": "apple iphone15 mobile"
  //   },
  //   {
  //     "id": 16,
  //     "name": "Samsung (65 inches) 4K TV",
  //     "productLink": "https://amzn.eu/d/1de0Coe",
  //     "isIphone": 0,
  //     "description": "This TV delivers stunning picture quality, with a resolution of 3840 x 2160 pixels and PurColor technology that fine-tunes the color range for a vibrant picture",
  //     "price": 94000,
  //     "category": "Home Appliance",
  //     "imageUrl": "https://i.ibb.co/hMzGm04/tv.jpg",
  //     "tags": "tv samsung 4k"
  //   },
  //   {
  //     "id": 17,
  //     "name": "OnePlus 12R (128GB Storage)",
  //     "productLink": "https://amzn.eu/d/hQcCWrm",
  //     "isIphone": 0,
  //     "description": "Fast & Smooth for years: Snapdragon 8 Gen 2 Mobile Platform, Up to 16GB RAM, Dual Cryo-velocity VC Cooling System.Fast & Smooth for years: Snapdragon 8 Gen 2 Mobile Platform, Up to 16GB of LPDDR5X RAM with RAM-Vita - Dual Cryo-velocity VC Cooling System, Pristine Display with Aqua Touch",
  //     "price": 39999,
  //     "category": "Mobile",
  //     "imageUrl": "https://i.ibb.co/pxM8yMc/oneplus-12r.jpg",
  //     "tags": "oneplus mobile"
  //   },
  //   {
  //     "id": 18,
  //     "name": "iPhone 14",
  //     "productLink": "http://tinyurl.com/29c9zfhx",
  //     "isIphone": 1,
  //     "description": "The Apple iPhone 14 will probably be one of the highest-selling models in this series. The phone comes with a perfect blend of sleek design and great features. The iPhone 14 is loaded with a large 6.1-inch screen and offers one of the fastest Apple A15 Bionic chipset.",
  //     "price": 89900,
  //     "category": "Mobile",
  //     "imageUrl": "https://i.ibb.co/S7R50TK/iphone-14.png",
  //     "tags": "apple iphone14 mobile"
  //   },
  //   {
  //     "id": 19,
  //     "name": "Samsung 7 kg, Fully-Automatic Washing Machine",
  //     "productLink": "https://amzn.eu/d/hfSSHxh",
  //     "isIphone": 0,
  //     "description": "Fully-automatic top load washing machine: Affordable with great wash quality Easy to use, Quick Wash Bedding Delicates Eco Tub Clean Energy Saving Jeans Normal Rinse + Spin Delay End",
  //     "price": 17990,
  //     "category": "Home Appliance",
  //     "imageUrl": "https://i.ibb.co/f1LSjBj/washing-machine.jpg",
  //     "tags": "washing-machine home washing"
  //   },
  //   {
  //     "id": 20,
  //     "name": "Samsung 236 L, Double Door Refrigerator",
  //     "productLink": "https://amzn.eu/d/bTgH5MW",
  //     "isIphone": 0,
  //     "description": "Frost Free Refrigerator: Auto Defrost with powerful cooling and long lasting freshness and performance. Manage your flexible storage needs with different convertible modes",
  //     "price": 26990,
  //     "category": "Home Appliance",
  //     "imageUrl": "https://i.ibb.co/H2H4zGd/fridge.jpg",
  //     "tags": "fridge refrigerator samsung"
  //   }
  //  ]
   
//   const calculateCumulativeSum = (products, id) => {
//     // Find the index of the product with the specified id
//  console.log(products);
//   // If the product with the specified id is not found or it's the last product, return an empty array
//   const index = id
// console.log(index);
//   // Sort the products by price in increasing order
//   products.sort((a, b) => a.price - b.price);

//   // Initialize variables
//   let cumulativeSum = 0;
//   const shortlistedProducts = [];

//   // Iterate through products until the cumulative sum exceeds the price of the selected product
//   for (let i = 0; i <= 20; i++) {
//     cumulativeSum += products[i].price;
//     if (cumulativeSum >= products[id].price) {
//       break;
//     }
//     shortlistedProducts.push(products[i]); // Add the product to the shortlisted products
//   }
  
//   return shortlistedProducts;
//   };

  // const getProductById = (products, id) => {
  //   console.log(id);
  //   return products.find(product => product.id == id);
  // };
  useEffect(() => {
//     const product = getProductById(dataArr, paramId);
//     console.log(paramId);
//     const shortlistedProducts = calculateCumulativeSum(dataArr, paramId);
// console.log(shortlistedProducts, paramId);
//     setQueriedProducts(shortlistedProducts)
//           setSelectedProduct(product)
//           console.log(product);
    console.log("inside useEffect, paramId: ", paramId, typeof paramId)
    fetch(`${baseUrl}/products/${paramId}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedProduct(data.product)
        setQueriedProducts(data.shortlistedProducts)
        console.log("FETCH 1 ")
        console.log(data.shortlistedProducts)
        console.log(queriedProducts)
      })
  }, [])

  
  return (
    <div className="flex flex-wrap">
      <div
        id="product-info-container"
        className="grid justify-center w-4/5 grid-cols-1 mx-auto mt-8 md:grid-cols-2 gap-x-12 gap-y-9">
        <div className="col-span-1 bg-white border border-gray-200 rounded-lg shadow ">
          {<ProductDetails selectedProduct={selectedProduct} />}
        </div>
        <div className="col-span-1 ">
          {<Comparison selectedProduct={selectedProduct} queriedProducts={queriedProducts} />}
        </div>
      </div>
      <hr />
      <div id="shortlisted-container" className="justify-center mx-auto mt-8">
        <div className="bg-white rounded-lg shadow ">{<SortedProductList queriedProducts={queriedProducts} />}</div>
      </div>
    </div>
  )
}

export default ProductPage
