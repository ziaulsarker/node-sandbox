import React, { Component } from "react";
import { Nav } from "./nav.jsx";

const AddUser = props => (
  <div>
    <form action="/" method="post">
      <input name="name" type="text" />
      <input type="email" name="email" id="email" />
      <button type="submit"> add </button>
    </form>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    let getUsers = new Promise((resolve, reject) => {
      fetch("/users")
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => {
          reject(err);
        });
    });

    getUsers.then(users => {
      this.setState(prevState => {
        return {
          users
        };
      });
    });
  }

  render() {
    let itterateUSers = this.state.users.map((user, key) => (
      <div key={key}>
        <p>
          {" "}
          Hello {user.name}, keep on learing {user.learning}{" "}
        </p>
      </div>
    ));

    let noUSers = <p> Sorry no uers found </p>;

    console.log("users", this.state.users);

    return (
      <React.Fragment>
        {itterateUSers.length ? itterateUSers : noUSers}
        <AddUser />
        <br></br>
        <Nav items={ ["one", "two", "three"] }></Nav>
        <Nav items={ ["one", "two", "three"] }></Nav>
        <Nav items={ ["one", "two", "three"] }></Nav>
      </React.Fragment>
    );
  }
}

export default App;
