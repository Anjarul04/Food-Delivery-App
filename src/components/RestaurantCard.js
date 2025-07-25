import { IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantCard = (props) =>{
    
    const {name,avgRating,cuisines,costForTwo,cloudinaryImageId} = props.resObj.info;
    const isOnline = useOnlineStatus();

    if(!isOnline){
        return <h1>looks like you are offline please check your internet connecton</h1>;
    }
    return(
        <div className="flex flex-wrap gap-[20px] mt-[20px] items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-xl">
            <Link to={"/restaurant/"+props.resObj.info.id}>
            <div className="w-[250px] h-[350px]  rounded-[10px] p-[10px] flex flex-col items-center">
                <img className="w-full h-[150px] object-cover rounded-md" src={IMG_URL+cloudinaryImageId}></img>
                <h4 className=" font-medium text-xl m-2 my-2 ">{name.split(" ").slice(0, 2).join(" ")}{name.split(" ").length > 2 ? "..." : ""}</h4>
                <p className="  text-lg">🍴 {cuisines.length > 2? cuisines.slice(0, 2).join(", ") + "...": cuisines.join(", ")}</p>
                <p className="m-1 text-lg">⭐Rating : {avgRating}</p>
                <p className=" text-lg">{costForTwo}</p>
            </div>
            </Link>
        </div>
    );
}
export default RestaurantCard;