_*Example:*_

```jsx
import { useState } from "react";

const [visible, setVisible] = useState(false);

<div>
  <button onClick={e => setVisible(true)}>Open Modal</button>

  <Modal visible={visible} onClose={setVisible}>
    <Modal.Header>
      Header
    </Modal.Header>
    <Modal.Body>
      m provident expedita alias consequatur deleniti similique? Ullam
      ipsa voluptates facilis sunt, itaque labore, voluptate rem eaque
      quaerat libero voluptatum dolorem, tempora assumenda sint?
      Iusto, deleniti. Soluta neque praesentium fugiat minus iure
      dicta eaque accusantium, animi rerum quaerat possimus facere,
      fuga libero!
    </Modal.Body>
    <Modal.Footer>
      <button onClick={e => setVisible(false)}>Close Modal</button>
    </Modal.Footer>
  </Modal>
</div>
```
