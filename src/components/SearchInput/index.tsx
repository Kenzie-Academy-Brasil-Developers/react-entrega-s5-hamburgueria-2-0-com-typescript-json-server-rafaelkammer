import { Dialog } from "@material-ui/core";
import { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router";
import { useAuth } from "../../Provider/Auth";
import Button from "../Button";
import Cart from "../Cart";
import { SearchContainer, InputContainer } from "./styles";

interface SearchInputProps {
  showInput: boolean;
}

const SearchInput = ({ showInput }: SearchInputProps) => {
  const history = useHistory();

  const [userInput, setUserInput] = useState("");
  const { Logout } = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  {
    /* showProducts é a função que filtra a lista
  function showProducts(userInput) {
    let listaFiltrada = products.filter((produto) => {
      return produto.name.toLowerCase().includes(userInput.toLowerCase());
});
setFilteredProducts(listaFiltrada);
} */
  }

  return (
    <SearchContainer>
      {showInput ? (
        <InputContainer>
          <input
            placeholder="Ex: Kenzie Burguer..."
            type="text"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
          />
          <Button
          // onClick={() => showProducts(userInput)}
          >
            <FaSearch />
          </Button>
        </InputContainer>
      ) : (
        <button
          className="iconButton"
          // onClick={() => {
          //   setShowInput(true);
          // }}
        >
          <FaSearch />
        </button>
      )}
      <button className="iconButton" onClick={handleOpen}>
        <FaShoppingCart />
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Dialog-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Cart handleClose={handleClose} />
      </Dialog>
      <button
        className="iconButton"
        onClick={() => {
          Logout(history);
        }}
      >
        <FiLogOut />
      </button>
    </SearchContainer>
  );
};
export default SearchInput;
