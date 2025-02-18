import { createContext } from "react";

const userContext = createContext({
  loggedIn: "default user",
});
export default userContext;
