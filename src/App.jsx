import { useDispatch } from "react-redux";
import "./App.css";
import { Add_To_Cart, Add_To_WishList } from "./redux/actions";

function App() {
  const dipatch = useDispatch();
  const product = { name: "Iphone", price: 1000 };
  return (
    <div>
      <button
        onClick={() => {
          dipatch(Add_To_Cart(product));
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          dipatch(Add_To_WishList(product));
        }}
      >
        Add to Wishlist
      </button>
    </div>
  );
}

export default App;
