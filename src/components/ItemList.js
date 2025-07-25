import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => dispatch(addItem(item));

  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="p-2 m-2 border-b-2 flex flex-row w-full"
        >
          {/* Text left side */}
          <div className="w-9/12 pr-3 flex flex-col justify-center text-left">
            <span className="font-semibold text-sm">{item?.card?.info?.name}</span>
            <span className="text-xs text-gray-700">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </span>
            <p className="text-xs text-gray-600 mt-1">
              {truncateText(item?.card?.info?.description, 30)}
            </p>
          </div>

          {/* Image right side */}
          <div className="w-3/12 p-2 relative flex-shrink-0">
            {item?.card?.info?.imageId && (
              <img
                className="w-full h-20 sm:h-24 object-cover rounded-md"
                src={IMG_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
            )}
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md bg-white text-green-600 shadow-md hover:bg-gray-100 text-xs font-medium border"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
