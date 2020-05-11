import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";
import useAccordionState from "./hooks/useAccordionState";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const accordionProps = useAccordionState([false, true, false]);

  return (
    <div>
      <div className="App">
        <div>
          <h2>Buttons</h2>
          <div className="buttons">
            <Button>Default Button</Button>
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
        </div>
        <hr />
        <div>
          <h2>Alert</h2>
          <div className="alerts">
            <Alert variant="success">
              Success alert - Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Quaerat omnis modi unde mollitia placeat
              laboriosam quia a commodi, dignissimos totam saepe eius veniam
              suscipit quidem fugiat iure deserunt autem nisi provident quo
              architecto optio earum aliquid adipisci. Veniam aut repellat
              officiis. Reprehenderit optio omnis, qui maiores dolore veritatis
              et odio inventore in exercitationem nisi, expedita distinctio
              ducimus iste, dolorem quae?
            </Alert>
            <Alert variant="warning">Warning alert</Alert>
            <Alert variant="info">Info Alert</Alert>
            <Alert variant="danger">Danger Alert</Alert>
            <Alert wantClose={false}>Default Alert</Alert>
          </div>
        </div>
        <div>
          <h2>Accordion</h2>
          <div className="accordion">
            <Accordion {...accordionProps}>
              <Accordion.Panel title="Pane1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                harum pariatur similique.
              </Accordion.Panel>
              <Accordion.Panel title="Pane2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                eveniet modi reiciendis.
              </Accordion.Panel>
              <Accordion.Panel title="Pane3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                similique nemo. Nulla, corrupti.
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
