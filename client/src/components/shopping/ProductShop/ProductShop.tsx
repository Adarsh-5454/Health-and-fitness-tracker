// import React, { useEffect, useState } from "react";
// import { clothingProducts } from "../../../utils/product/clothingProducts";
// import { fitnessEquipment } from "../../../utils/product/fitnessProducts";
// import ProductCategory from "./ProductCategory";

// import axios from "axios";

// interface Shopping {
//   name: string;
//   image: string;
//   price: {
//     original: number;
//     discounted: number;
//   };
//   rating: number;
//   category: string;
//   specifications: {
//     color: string;
//     material: string;
//     product_dimensions: string;
//     pattern: string;
//     sleeve: string;
//     size: string;
//   };
//   createdAt: string;
// }

// function shopProduct() {
//   const [shoppings, setShoppings] = useState<Shopping[]>([]);

//   useEffect(() => {
//     const fetchshoppingProduct = async () => {
//       try {
//         const response = await axios.get<Shopping[]>(
//           "http://localhost:5000/api/shoppingRoutes"
//         );
//         setShoppings(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchshoppingProduct();
//   }, []);

//   return (
//     <div className="space-y-6">
//       <ProductCategory title="Clothing" products={clothingProducts} />
//       <ProductCategory title="Fitness" products={fitnessEquipment} />
//     </div>
//   );
// }

// export default shopProduct;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCategory from "./ProductCategory";

interface Shopping {
  id: number;
  name: string;
  image: string;
  price: {
    original: number;
    discounted: number;
  };
  rating: number;
  category: string;
  specifications: {
    color: string;
    material: string;
    product_dimensions: string;
    pattern: string;
    sleeve: string;
    size: string;
  };
  createdAt: string;
}

function ShopProduct() {
  const [shoppings, setShoppings] = useState<Shopping[]>([]);

  useEffect(() => {
    const fetchShoppingProduct = async () => {
      try {
        const response = await axios.get<Shopping[]>(
          "http://localhost:5000/api/shoppingRoutes"
        );
        setShoppings(response.data); // Store fetched products
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShoppingProduct();
  }, []);

  // Filter products by category
  const clothingProducts = shoppings.filter(
    (product) => product.category === "Clothing"
  );
  const fitnessProducts = shoppings.filter(
    (product) => product.category === "Fitness"
  );

  return (
    <div className="space-y-6">
      <ProductCategory title="Clothing" products={clothingProducts} />
      <ProductCategory title="Fitness" products={fitnessProducts} />
    </div>
  );
}

export default ShopProduct;
