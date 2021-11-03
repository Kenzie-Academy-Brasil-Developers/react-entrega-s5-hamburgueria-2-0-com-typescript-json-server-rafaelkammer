import { useCart } from "../../Provider/Cart";
import CartProductCard from "../CartProductCard";
import { CartContainer, CartHeader, TotalContainer } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button";

interface Product {
  name: string;
  id: number;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

interface CartProps {
  handleClose: () => void;
}

const Cart = ({ handleClose }: CartProps) => {
  const { cart } = useCart();

  const removeAll = () => {
    for (let i = cart.length; i >= 0; i--) {
      cart.shift();
    }
    handleClose();
  };

  let valorTotal = cart
    .reduce(function (acc, obj) {
      return acc + obj.price * obj.quantity;
    }, 0)
    .toFixed(2);

  return (
    <CartContainer>
      <CartHeader>
        <h4>Carrinho de compras</h4>
        <button
          onClick={() => {
            handleClose();
          }}
          className="closeButton"
        >
          <AiOutlineClose />
        </button>
      </CartHeader>
      {cart.map((product: Product) => {
        return <CartProductCard key={product.id} product={product} />;
      })}
      <hr />
      <TotalContainer>
        <div className="valueContainer">
          <h4>Total</h4>
          <h4>R$ {valorTotal}</h4>
        </div>
        <Button
          onClick={() => {
            removeAll();
          }}
          format={false}
        >
          Remover todos
        </Button>
      </TotalContainer>
    </CartContainer>
  );
};

export default Cart;
