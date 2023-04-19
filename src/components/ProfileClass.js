import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor" + this.props.name);

    //create state
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    console.log("Child ComponentDidMount" + this.props.name);

    const data = await fetch("https://api.github.com/users/ShivRathee");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Child ComponentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Child componentWillUnmount");
  }

  render() {
    console.log("Child Render" + this.props.name);

    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state?.userInfo?.avatar_url} />
        <p>Name: {this.state?.userInfo?.name}</p>
        <p>Location: {this.state?.userInfo?.location}</p>
      </div>
    );
  }
}

export default Profile;
