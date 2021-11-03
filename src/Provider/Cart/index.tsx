import { createContext, ReactNode, useContext, useState } from "react";

interface Product {
  name: string;
  id: number;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

interface CartProvidersProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProvidersProps) => {
  const [cart, setCart] = useState<Product[]>([] as Product[]);

  const addProduct = (product: Product) => {
    if (!cart.find((produto: Product) => produto.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const deleteProduct = (ProductToBeDeleted: Product) => {
    const newList = cart.filter(
      (product) => product.name !== ProductToBeDeleted.name
    );

    setCart(newList);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
