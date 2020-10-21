import React, { forwardRef } from "react";
import BreadcrumbItem from "./BreadcrumbItem";
import styled from "styled-components";
import colors from "../../configs/colors";

const StyledOl = styled.ol`
  display: flex;
  flex-direction: row;

  padding: 10px 8px;
  margin: 0;

  background-color: ${colors.silverLight};
  border: 1px solid ${colors.gray80};
  border-radius: 3px;
`;

StyledOl.displayName = "StyledOl";

const Breadcrumb = forwardRef(({ children }, ref) => {
  return (
    <nav aria-label="Breadcrumb" ref={ref}>
      <StyledOl>{children}</StyledOl>
    </nav>
  );
});

Breadcrumb.displayName = "Breadcrumb";

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
