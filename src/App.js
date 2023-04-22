
import "./App.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Cart from "./component/Cart";
import { BrowserRouter, Route } from "react-router-dom";

function App() {

  console.log("First commit");
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact>
        <Home></Home>
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
    </BrowserRouter>
  );
}
export default App;
