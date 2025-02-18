import { useDispatch } from "react-redux";
import { CDN_URL } from "./utils/constant";
import { addItems } from "./utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-6 mb-6 border-b-2 border-gray-300 text-left flex justify-between items-center"
        >
          <div className="w-9/12">
            <div className="py-3">
              <span className="font-medium">{item.card.info.name}</span>
              <span className="text-gray-700">
                {" "}
                - ₹{" "}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 flex justify-end relative">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-40 h-30 object-cover rounded"
            />
            <button
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded p-2 bg-white shadow-lg text-green-600 font-semibold hover:bg-green-300 hover:text-white"
              onClick={() => handleAddItem(item)}
            >
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
