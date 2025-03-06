import { useDispatch } from "react-redux";
import "./App.css";
import { Add_To_Cart } from "./redux/actions";

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
    </div>
  );
}

export default App;
