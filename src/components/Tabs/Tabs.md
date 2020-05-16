_*Example:*_

```js
import { useState } from "react";

const [expanded, onChange] = useState(1);

<Tabs expanded={expanded} onChange={onChange}>
  <Tabs.Panel title="title 1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Tabs.Panel>
  <Tabs.Panel title="title 2">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut eveniet modi
    reiciendis.
  </Tabs.Panel>
</Tabs>;
```