import React from "react";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button>Default Button</Button>
      <Button variant="primary">Primary Button</Button>
      <Button variant="primary" outline>
        Primary Button
      </Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="danger" outline>
        Danger Button
      </Button>
      <Button variant="warning">Info Button</Button>
      <Button variant="warning" outline>
        Info Button
      </Button>
      <Button variant="warning" disabled>
        Info Button
      </Button>
      <Button variant="info">Info Button</Button>
      <Button variant="info" outline>
        Info Button
      </Button>
    </div>
  );
}

export default App;
