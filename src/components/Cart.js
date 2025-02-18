import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-20 p-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-4 m-4 bg-black text-white rounded-lg font-bold"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <ItemList items={cartItem} />
      </div>
      {cartItem.length === 0 && (
        <h1 className="p-10 text-2xl font-semibold text-gray-600">
          Your cart is empty! Add items to get started. 🛒
        </h1>
      )}
    </div>
  );
};
export default Cart;
