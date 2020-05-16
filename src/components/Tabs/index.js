import React from "react";
import PropType from "prop-types";
import TabPanel from "./TabPanel";
import TabList from "./TabList";
import { TabProvider } from "./TabContext";
import useRandomId from "../../hooks/useRandomId";
import useTabState from "../../hooks/useTabState";
import { useRef } from "react";

/**
 * Layered section of content
 */
function Tabs({
  children,
  onChange: controlledOnchange,
  expanded: controlledExpanded,
  id,
}) {
  // TODO: autoswitch
  let uncontrolled = useTabState();
  let isControlled = useRef(controlledExpanded != null);

  const expanded = isControlled.current
    ? controlledExpanded
    : uncontrolled.expanded;
  const onChange = isControlled.current
    ? controlledOnchange
    : uncontrolled.onChange;

  const uid = useRandomId(id);
  const tabList = React.Children.map(children, (child, index) => {
    return {
      index,
      title: child.props.title,
      uid: `${uid}_${index}`,
    };
  });

  return (
    <div>
      <TabProvider
        onTabChange={onChange}
        expanded={expanded}
        noOfPanels={React.Children.count(children)}>
        <TabList list={tabList}></TabList>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            ...child.props,
            uid: `${uid}_${index}`,
            index,
          });
        })}
      </TabProvider>
    </div>
  );
}

Tabs.propTypes = {
  /** Triggers when tab is going to change - For controlled component */
  onChange: PropType.func,
  /** default selected tab index */
  expanded: PropType.number,
  /** HTML id attribute(in case of empty the random number will be generated using nanoid library) */
  id: PropType.string,
};

Tabs.defaultProps = {
  onChange: null,
  expanded: null,
  id: undefined,
};

Tabs.Panel = TabPanel;

export default Tabs;
