import React from "react";

import Titles from "./components/Titles"
import Form from "./components/Form"
import Display from "./components/Display"

class App extends React.Component {
  render() {
    return (
      <div>
        <p><Titles /></p>
        <p><Form /></p>
        <p><Display /></p>
      </div>
    );
  }
};

export default App;