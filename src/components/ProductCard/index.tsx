import { useCart } from "../../Provider/Cart";
import Button from "../Button";
import { ProductContainer, ImgContainer, InfoContainer } from "./styles";

interface Product {
  name: string;
  id: number;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  const { name, price, category, image } = product;
  const { addProduct } = useCart();
  return (
    <ProductContainer>
      <ImgContainer>
        <img src={image} alt={name} />
      </ImgContainer>
      <InfoContainer>
        <h3>{name}</h3>
        <p>{category}</p>
        <h4>R$ {price.toFixed(2)}</h4>
        <Button
          onClick={() => {
            addProduct(product);
          }}
          format={true}
          size={false}
          fullWidth={false}
        >
          Adicionar
        </Button>
      </InfoContainer>
    </ProductContainer>
  );
};
export default ProductCard;
