import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Product {
  name: string;
  id: number;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

interface ProductProvidersProps {
  children: ReactNode;
}

interface ProductProviderData {
  products: Product[];
}

const ProductContext = createContext<ProductProviderData>(
  {} as ProductProviderData
);
export const ProductProvider = ({ children }: ProductProvidersProps) => {
  const [products, setProducts] = useState<Product[]>([] as Product[]);

  useEffect(() => {
    axios
      .get("https://kenzieburguer.herokuapp.com/products")
      .then((response) => setProducts(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
