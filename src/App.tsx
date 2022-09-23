import styled from "styled-components";
import {ShoppingWishlist} from "./components/ShoppingWishlist";

const AppStyles = styled.div`
  background-color: black;
  color: white;
  display: flex;
  height: 100vh;
  text-align: center;
  padding-bottom: 2em;
`;

const App = () => {

  return (
      <AppStyles>
          <ShoppingWishlist/>
      </AppStyles>
  );
};
export default App;
