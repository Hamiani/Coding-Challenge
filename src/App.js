import React, { Component } from "react";
import RepositoryList from "./Repositories-list";
class App extends Component {
  render() {
    return (
      <div className="container">
        <RepositoryList />
      </div>
    );
  }
}

export default App;
