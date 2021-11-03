import NavBar from "../../components/NavBar";
import Products from "../../components/Products";
import { MainContainer } from "./styles";

const Home = () => {
  return (
    <MainContainer>
      <NavBar />
      <Products />
    </MainContainer>
  );
};
export default Home;
