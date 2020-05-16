import React from "react";
import Tab from "./Tab";
import styled from "styled-components";

const TabListStyled = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

TabListStyled.displayName = "TabListContainer";

function TabList({ list }) {
  // Id = tabs_tab_${uid}_id
  return (
    <TabListStyled role="tablist">
      {list.map(({ title, uid }, index) => (
        <Tab index={index} uid={uid} key={`${uid}_tab`}>
          {title}
        </Tab>
      ))}
    </TabListStyled>
  );
}

export default TabList;
