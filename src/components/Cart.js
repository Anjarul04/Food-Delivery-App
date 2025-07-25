import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-8 pt-30 text-center ">
      <h1 className="text-2xl font-bold text-center mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 && (
        <p className="text-center text-gray-500 mb-[250px]">
          "Your cart is lonelier than a desert. Add some food!" 🏜️
        </p>
      )}

      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
      {cartItems.length != 0 && (
        <button
          className="m-8 p-2 bg-black text-white cursor-pointer rounded-lg text-center items-center "
          onClick={handleOnClick}
        >
          clear-Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
