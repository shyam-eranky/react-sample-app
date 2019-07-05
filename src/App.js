
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import AppContainer from "./components/app-container";
import service from "./Service";
import "../public/css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
      },
      isReady: false
    };
  }
  render() {
    if (this.state.isReady) {
      return (
        <AppContainer data={this.state.data} />
      );
    } else {
      return null;
    }
  }
  componentDidMount() {
    service().then((data) => {
      this.setState({
        data,
        isReady: true
      });
    })
  }
}

export default hot(module)(App);
