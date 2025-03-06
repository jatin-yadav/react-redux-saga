import { useDispatch } from "react-redux";
import "./App.css";
import { Add_To_Cart } from "./redux/actions";

function App() {
  const dipatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dipatch(Add_To_Cart);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

export default App;
