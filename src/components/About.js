import { Component } from "react";

const user = {
  name: "Anjarul Haque",
  bio: "Frontend developer who loves React and coffee ☕",
  image: "https://do6gp1uxl3luu.cloudfront.net/question-webp/dummyUser.jpg",
};

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBio: false,
    };
  }

  toggleBio = () => {
    this.setState((prevState) => ({
      showBio: !prevState.showBio,
    }));
  };

  render() {
    return (
      <div className="mt-28 flex justify-center flex-col items-center w-full max-w-[600px] h-auto my-8 mx-auto border-2 border-[#ddd] rounded-lg bg-[#f9f9f9] text-center p-6 sm:p-8 font-sans">
        <img
          className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] object-cover rounded-full -mt-14 mb-6"
          src={user.image}
          alt="user-profile"
        />
        <h2 className="font-bold text-2xl sm:text-3xl mb-6">{user.name}</h2>
        <button
          className="py-2 px-4 bg-[#007bff] text-white rounded-md cursor-pointer text-sm sm:text-base hover:bg-[#0056b3] transition"
          onClick={this.toggleBio}
        >
          {this.state.showBio ? "Hide Bio" : "Show Bio"}
        </button>
        {this.state.showBio && (
          <p className="mt-4 text-sm sm:text-base text-gray-700">{user.bio}</p>
        )}
      </div>
    );
  }
}

export default About;
