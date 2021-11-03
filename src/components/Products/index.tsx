import { useProduct } from "../../Provider/Products";
import ProductCard from "../ProductCard";
import { ProductsContainer } from "./styles";

interface Product {
  name: string;
  id: number;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

const Products = () => {
  const { products } = useProduct();

  return (
    <ProductsContainer>
      {products.map((product: Product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </ProductsContainer>
  );
};

export default Products;
