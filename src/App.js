import React from "react";
import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import useAccordionState from "./hooks/useAccordionState";
import Accordion from "./components/Accordion";
import Tabs from "./components/Tabs";
import useTabState from "./hooks/useTabState";
import Modal from "./components/Modal";
import useModalState from "./hooks/useModalState";

function App() {
  const accordionProps = useAccordionState([false, true, false]);
  const tabProps = useTabState(1);
  const [visible1, open1, close1] = useModalState(false);
  const [visible2, open2, close2] = useModalState(false);

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati voluptate minus minima similique voluptates
                consectetur sapiente debitis exercitationem ipsum alias,
                laboriosam repellendus accusantium, animi quo quos, maiores ut
                nisi officia. Maxime, qui repellendus assumenda quo enim quis
                nisi modi officia, quibusdam error molestiae doloribus provident
                porro? Illum molestiae saepe officia laudantium omnis
                blanditiis. Voluptas, adipisci fugiat? Beatae quisquam, officiis
                neque quasi voluptates ex non minima nobis ipsam? Et, alias!
                Obcaecati architecto, officiis reprehenderit at repellendus
                labore voluptates non illum totam minus sit laboriosam
                consequatur ipsum quidem, voluptatem, cumque possimus recusandae
                quam! Est reprehenderit, officia, at non fuga minima dolorem
                possimus perferendis eum neque recusandae dolore sed libero odit
                aliquam. Numquam excepturi voluptatum sequi iste, similique
                saepe, ad incidunt inventore consequuntur ipsum optio deserunt
                voluptate aperiam quae praesentium rerum quidem perspiciatis.
                Libero, culpa nisi. Eligendi nulla ducimus corrupti odit ea quos
                minus labore molestias asperiores officia distinctio dolore
                beatae sint voluptatibus magni commodi quae similique quibusdam
                doloribus suscipit, voluptates quod? Soluta reiciendis quo
                ipsum, enim magni eos repellendus earum nobis accusamus
                voluptatum. Quos quibusdam labore, vitae ullam officia pariatur
                aut expedita. Voluptatibus fugit dolores numquam tenetur a rem
                eaque excepturi. Modi cum blanditiis assumenda id quaerat a
                inventore, rem atque tenetur magni quisquam, consequatur
                nesciunt nihil ad accusantium, error eius porro libero dolorum
                provident! Facilis dolores officia modi ducimus doloribus
                dignissimos voluptates voluptatibus laboriosam esse quo vero
                velit distinctio magnam quidem, iure quia obcaecati, magni ad
                sed rem illo blanditiis. Cupiditate impedit, quasi asperiores
                corporis quo reiciendis, excepturi, quibusdam eveniet deserunt
                architecto velit voluptatibus dolorem dicta voluptates aut.
                Inventore quibusdam, provident exercitationem quidem dicta quos
                officia recusandae aperiam. Asperiores eum fugit rerum?
                Molestiae vel doloremque nulla consequatur velit veritatis
                soluta, fugiat quasi in totam, pariatur eos quidem architecto
                et. Vero unde fugit perferendis eum odit deserunt est enim
                explicabo inventore libero.
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
        <div>
          <h1>Tab</h1>
          <div>
            <Tabs {...tabProps}>
              <Tabs.Panel title="title 1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati voluptate minus minima similique voluptates
                consectetur sapiente debitis exercitationem ipsum alias,
                laboriosam repellendus accusantium, animi quo quos, maiores ut
                nisi officia. Maxime, qui repellendus assumenda quo enim quis
                nisi modi officia, quibusdam error molestiae doloribus provident
                porro? Illum molestiae saepe officia laudantium omnis
                blanditiis. Voluptas, adipisci fugiat? Beatae quisquam, officiis
                neque quasi voluptates ex non minima nobis ipsam? Et, alias!
                Obcaecati architecto, officiis reprehenderit at repellendus
                labore voluptates non illum totam minus sit laboriosam
                consequatur ipsum quidem, voluptatem, cumque possimus recusandae
                quam! Est reprehenderit, officia, at non fuga minima dolorem
                possimus perferendis eum neque recusandae dolore sed libero odit
                aliquam. Numquam excepturi voluptatum sequi iste, similique
                saepe, ad incidunt inventore consequuntur ipsum optio deserunt
                voluptate aperiam quae praesentium rerum quidem perspiciatis.
                Libero, culpa nisi. Eligendi nulla ducimus corrupti odit ea quos
                minus labore molestias asperiores officia distinctio dolore
                beatae sint voluptatibus magni commodi quae similique quibusdam
                doloribus suscipit, voluptates quod? Soluta reiciendis quo
                ipsum, enim magni eos repellendus earum nobis accusamus
                voluptatum. Quos quibusdam labore, vitae ullam officia pariatur
                aut expedita. Voluptatibus fugit dolores numquam tenetur a rem
                eaque excepturi. Modi cum blanditiis assumenda id quaerat a
                inventore, rem atque tenetur magni quisquam, consequatur
                nesciunt nihil ad accusantium, error eius porro libero dolorum
                provident! Facilis dolores officia modi ducimus doloribus
                dignissimos voluptates voluptatibus laboriosam esse quo vero
                velit distinctio magnam quidem, iure quia obcaecati, magni ad
                sed rem illo blanditiis. Cupiditate impedit, quasi asperiores
                corporis quo reiciendis, excepturi, quibusdam eveniet deserunt
                architecto velit voluptatibus dolorem dicta voluptates aut.
                Inventore quibusdam, provident exercitationem quidem dicta quos
                officia recusandae aperiam. Asperiores eum fugit rerum?
                Molestiae vel doloremque nulla consequatur velit veritatis
                soluta, fugiat quasi in totam, pariatur eos quidem architecto
                et. Vero unde fugit perferendis eum odit deserunt est enim
                explicabo inventore libero.
              </Tabs.Panel>
              <Tabs.Panel title="title 2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                eveniet modi reiciendis.
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
        <div>
          <h1>Modal</h1>
          <div>
            <button onClick={open1}>Open1 Modal</button>
            <Modal visible={visible1} onClose={close1} forceRender>
              <Modal.Header>
                <h2>Hello</h2>
              </Modal.Header>
              <Modal.Body>
                <button onClick={open2}>Open2 Modal</button>
                eaque voluptas aut quis magnam ratione maiores accusantium iusto
                reprehenderit esse ut id corrupti vitae soluta asperiores
                inventore mollitia ipsa. Aperiam qui reiciendis aliquid pariatur
                maiores molestiae doloremque quibusdam porro corrupti hic
                adipisci eaque, non tempora? At sint sed omnis quo ullam?
                Consequuntur quos delectus iure cupiditate cumque voluptas
                pariatur? Voluptate optio nemo molestiae, sequi ab cumque
                tenetur amet, molestias nesciunt quam impedit ducimus
                consectetur vitae numquam provident expedita alias consequatur
                deleniti similique? Ullam ipsa voluptates facilis sunt, itaque
                labore, voluptate rem eaque quaerat libero voluptatum dolorem,
                tempora assumenda sint? Iusto, deleniti. Soluta neque
                praesentium fugiat minus iure dicta eaque accusantium, animi
                rerum quaerat possimus facere, fuga libero!
              </Modal.Body>
              <Modal.Footer>
                <button onClick={close1}>Close1 Modal</button>
              </Modal.Footer>
            </Modal>
            <Modal visible={visible2} onClose={close2}>
              <Modal.Header>
                <h2>Hello</h2>
              </Modal.Header>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
