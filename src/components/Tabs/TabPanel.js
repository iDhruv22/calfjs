import React from "react";
import { useTabContext } from "./TabContext";
import styled from "styled-components";
import colors from "../../configs/colors";

const TabPanelStyled = styled.div`
  border: 1px solid ${colors.gray80};
  padding: 12px 16px;
`;

TabPanelStyled.displayName = "TabPanelContainer";

function TabPanel({ children, uid, index }) {
  const { expanded } = useTabContext();
  const isActive = expanded === index;

  return (
    <TabPanelStyled
      role="tabpanel"
      aria-labelledby={`t_t_${uid}_id`}
      id={`t_p_${uid}_id`}
      hidden={!isActive}>
      {children}
    </TabPanelStyled>
  );
}

export default TabPanel;
