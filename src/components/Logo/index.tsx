import { LogoContainer } from "./styles";
import { FiShoppingBag } from "react-icons/fi";

const Logo = () => {
  return (
    <LogoContainer>
      <h1>Burguer </h1>
      <div className="InnerContainer">
        <div className="InnerContainerLeft">
          <FiShoppingBag />
        </div>
        <div className="InnerContainerRight">
          <p>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <b>melhores</b> ingredientes.
          </p>
        </div>
      </div>
      <div className="dotContainer">
        <div>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </LogoContainer>
  );
};
export default Logo;
