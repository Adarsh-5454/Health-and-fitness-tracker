// import Cartelement from "../components/shopping/Cart/CartItem";
// import CartTotal from "../components/shopping/Cart/CartTotal";
// import NavBarShop from "../components/shopping/NavBarShop/NavBarShop";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { ICart } from "../../../server/src/models/shoppingModel/cartModel";

// const CartElement = ({ setMenu, menu, prev }) => {
//   interface Cart {
//     items: ICart[];
//     totalPrice: number;
//   }

//   const [carts, setCarts] = useState<Cart[]>([]);

//   useEffect(() => {
//     const fetchCartProduct = async () => {
//       try {
//         const response = await axios.get<Cart[]>(
//           "http://localhost:5000/api/shoppingRoutes"
//         );
//         setCarts(response.data); // Store fetched products
//         console.log(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchCartProduct();
//   }, []);

//   // Filter products by category

//   return (
//     <div>
//       <NavBarShop setMenu={setMenu} menu={menu} />
//       <div className="px-4 sm:px-36">
//         <h2 className="text-base sm:text-2xl text-center font-bold mb-4">
//           SHOPPING CART
//         </h2>
//         <div className="flex flex-col md:flex-row justify-between ">
//           {carts.map((cartss) => (
//             <CartItem prev={cartss.items} totalprice={cartss.totalPrice} />
//           ))}

//           <CartTotal />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CartElement;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Define TypeScript interfaces
// interface Product {
//   id: string;
//   name: string;
//   image: string;
//   price: number;
// }

// interface CartItem {
//   product: Product;
//   quantity: number;
//   cart_image: string;
// }

// const CartComponent: React.FC = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get<CartItem[]>(
//           "http://localhost:5000/api/shoppingRoutes/cart/item"
//         );
//         setCartItems(response.data);
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//       }
//     };

//     fetchCartItems();
//   }, []);
//   console.log(cartItems);

//   return (
//     <div>
//       {cartItems.map((item) => (
//         <div key={item.product.id}>
//           <img src={item.product.image} alt={item.product.name} />
//           <h3>{item.product.name}</h3>
//           <p>Quantity: {item.quantity}</p>
//           <p>Price: ${item.product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartComponent;

import React, { useState, useEffect } from "react";
import axios from "axios";

// Define TypeScript interfaces
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
  cart_image: string;
}

const CartComponent: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get<{ items: CartItem[] }>(
          "http://localhost:5000/api/shoppingRoutes/cart/item"
        );

        // Check if the response contains the expected structure
        if (response.data && Array.isArray(response.data.items)) {
          setCartItems(response.data.items); // Extract and set the items array
        } else {
          console.error("Invalid response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  console.log(cartItems);

  return (
    <div>
      {cartItems.map(({ ...product }) => (
        <div key={product.product.id}>
          <img src={product.product.image} alt={product.product.name} />
          <h3>{product.product.name}</h3>
          <p>Quantity: {product.quantity}</p>
          <p>Price: ${product.product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default CartComponent;
