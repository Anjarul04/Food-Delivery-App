import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus.js";


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.971599&lng=77.594566&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const handleSearch = () => {
    const filtered = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.trim().toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
    const topRated = allRestaurants.filter((res) => res.info.avgRating >= 4);
    setFilteredRestaurants(topRated);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1 className="text-center mt-20 text-red-500 text-xl">You are offline. Please check your internet connection.</h1>;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="my-6">
      {/* Search + Filter */}
      <div className=" flex flex-col sm:flex-row items-center justify-center gap-4 mt-24">
        {/* Search Box */}
        <div className=" bg-white rounded-full shadow-lg flex w-full max-w-sm sm:max-w-md">
          <input
            type="text"
            className="px-3 py-2 w-full rounded-l-full focus:outline-none"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-r-full hover:from-indigo-500 hover:to-blue-500 cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={handleTopRated}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap gap-6 mt-10 items-center justify-center">
        {filteredRestaurants.length === 0 ? (
          <p className="text-gray-600 text-lg">No restaurants found</p>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
