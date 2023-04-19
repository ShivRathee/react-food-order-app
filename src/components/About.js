import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";

//  FUNCTIONAL BASED
//
// const About1 = () => {
//   return (
//     <div className="about">
//       <h1>This is Swiggy clone </h1>
//       <p>It is made using React </p>
//       <p> Made By: Shiv Rathee</p>
//       <Outlet></Outlet>
//       <ProfileClassComponent name={"Shiv Class"} age={23} />
//       <ProfileFunctionalComponent name={"shiv"} age={24} />
//     </div>
//   );
// };

//  CLASS BASED
class About extends React.Component {
  constructor(props) {
    console.log("Parent Constructor");
    super(props);
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("parent ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("parent componentWillUnmount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about">
        <h1>This is Swiggy clone </h1>
        <p>It is made using React </p>
        <p> Made By: Shiv Rathee</p>
        <Outlet></Outlet>
        <ProfileClassComponent name={"One"} age={23} />
      </div>
    );
  }
}
export default About;
