import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "domy name",
        location: "domy Loc",
      },
    };
    // console.log("child constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Anjarul04");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);

    // console.log("child component Did Mounten");
  }
  render() {
    // console.log("child render");
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h3>Name : {name}</h3>
        <h4>Location : {location}</h4>
        <h4>Contact : @anjarulhaq</h4>
      </div>
    );
  }
}
export default UserClass;
