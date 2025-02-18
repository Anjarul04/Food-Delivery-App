import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import userContext from "./utils/userContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("parent component Did Mounten");
  }
  render() {
    // console.log("parent render");
    return (
      <div className="about-container pt-30 ">
        <div>
          loggedIn
          <userContext.Consumer>
            {({ loggedIn }) => (
              <h1 className="font-bold text-2xl">{loggedIn}</h1>
            )}
          </userContext.Consumer>
        </div>
        <h1>About Anjarul Haque</h1>
        {/* <User Name={"Anjarul"} Location={"Noida"} /> */}
        <UserClass Name={"Anjarul"} Location={"Noida"} />
      </div>
    );
  }
}
export default About;
