import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0); // state variable
  return (
    <div>
      <h2> Profile functional Component</h2>
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
      <p>count: {count}</p>
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        setCount
      </button>
    </div>
  );
};
export default Profile;
