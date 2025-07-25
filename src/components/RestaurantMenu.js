import { useParams } from 'react-router-dom';
import useRestaurentMenu from '../utils/useRestaurantMenu.js';
import Shimmer from './Shimmer.js';
import RestaurantCategory from './RestaurantCategory.js';
import { useState } from 'react';

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const restaurantMenu = useRestaurentMenu(resId);

  if (restaurantMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwo } =
    restaurantMenu?.data?.cards[2]?.card?.card?.info || {};

  const categories =
    restaurantMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="mt-28 w-full md:w-8/12 lg:w-6/12 mx-auto text-center p-4">
      <h1 className="font-bold text-2xl mb-2">{name}</h1>
      <p className="font-bold text-lg mb-6">
        {cuisines.join(", ")} - ₹{costForTwo / 100}
      </p>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
