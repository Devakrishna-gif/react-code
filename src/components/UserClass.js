import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    console.log("constructor");
    this.state = {
      userInfo: {
      }
    }
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json
    })
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    console.log("Component Did Update")
  }

  componentWillUnmount(){
    console.log("Component Will UnMOunt");
  }
  render() {
    const {name,location} = this.state.userInfo;
    console.log("render");
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
