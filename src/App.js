import { useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CardProvider from "./store/CardProvider";



function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
  setCartIsShown(true)
  }
  
  const hideCartHandler = () => {
  setCartIsShown(false)
  }

  return (
    <CardProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
