import logo2 from "../images/logo2.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import userContext from "./utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedIn } = useContext(userContext);
  // subscribing to the store using to the selector
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 fixed top-0 w-full z-50">
      <div className="logo-container">
       <Link to='/'> <img className="w-30" src={logo2} alt="Logo" /> </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4 [&>li]:hover:text-blue-500 [&>li]:px-3 font-bold [&>li]:font-bold [&>li]:hover:cursor-pointer [&>li]:text-gray-700">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">
              ({cartItem.length} items) <span className="ml-1">🛒</span>
            </Link>
          </li>

          {/* <li>
            <Link to="/grocery">Grocery</Link>
          </li> */}

          <li>
            <button
              className="hover:text-blue-500 px-2 font-bold hover:cursor-pointer text-gray-700"
              onClick={() =>
                setBtnNameReact((prev) =>
                  prev === "Login" ? "Logout" : "Login"
                )
              }
            >
              {btnNameReact}
            </button>
          </li>
          {/* <li className="hover:cursor-pointer">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
