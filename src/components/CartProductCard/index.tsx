import { useCart } from "../../Provider/Cart";
import { CartInnerContainer, ImgContainer, InfoContainer } from "./styles";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from "react";

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

const CartProductCard = ({ product }: ProductProps) => {
  const { id, name, image, quantity } = product;
  const { cart, deleteProduct } = useCart();
  const [totalQuantity, setTotalQuantity] = useState(quantity);

  const handleSum = () => {
    setTotalQuantity(totalQuantity + 1);
  };
  const handleSub = () => {
    setTotalQuantity(totalQuantity - 1);
  };

  return (
    <>
      <CartInnerContainer>
        <ImgContainer>
          <img src={image} alt={name} />
        </ImgContainer>
        <InfoContainer>
          <h3>{name}</h3>
          <div className="quantityContainer">
            <button
              onClick={() => {
                handleSub();
              }}
              className="quantityButton"
            >
              -
            </button>
            <p>{totalQuantity}</p>
            <button
              onClick={() => {
                handleSum();
              }}
              className="quantityButton"
            >
              +
            </button>
          </div>
        </InfoContainer>
        <button
          className="deleteButton"
          onClick={() => {
            deleteProduct(product);
          }}
        >
          <FaTrash />
        </button>
      </CartInnerContainer>
    </>
  );
};
export default CartProductCard;
