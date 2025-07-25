import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleOnClick = () => setShowIndex();

  return (
    <div className="w-full sm:w-11/12 md:w-full mx-auto mb-4 shadow-md rounded-lg bg-gray-50">
      <div className="p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleOnClick}
        >
          <span className="font-bold text-base sm:text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span className="text-2xl">{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
