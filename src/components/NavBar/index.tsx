import { useState } from "react";
import SearchInput from "../SearchInput";
import {
  NavContainer,
  NavInnerContainer,
  NavLeftContainer,
  NavRightContainer,
} from "./styles";

const NavBar = () => {
  const [showInput, setShowInput] = useState(true);

  return (
    <NavContainer>
      <NavInnerContainer>
        <NavLeftContainer>
          <h1>Burguer </h1>
        </NavLeftContainer>
        <NavRightContainer>
          <SearchInput showInput={showInput} />
        </NavRightContainer>
      </NavInnerContainer>
    </NavContainer>
  );
};
export default NavBar;
