import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);

  const { Name, Location } = props;
  return (
    <div className="user-card">
      <h3>Count = {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Increase
      </button>
      <h3>Name : {Name}</h3>
      <h4>Location : {Location}</h4>
      <h4>Contact : @anjarulhaq</h4>
    </div>
  );
};
export default User;
