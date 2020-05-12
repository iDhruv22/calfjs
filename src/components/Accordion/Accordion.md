*_Example:_*

```js
import { useState } from "react";

const [expanded, setExpanded] = useState([true, false]);

const onToggle = (index) => {
  let newExpanded = [...expanded];
  newExpanded[index] = !newExpanded[index];
  setExpanded(newExpanded);
};

<Accordion expanded={expanded} onToggle={onToggle}>
  <Accordion.Panel title="Panel 1">Content 1</Accordion.Panel>
  <Accordion.Panel title="Panel 2">Content 2</Accordion.Panel>
</Accordion>;
```
