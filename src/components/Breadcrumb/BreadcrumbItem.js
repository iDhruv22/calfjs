import React, { useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../configs/colors";

const StyledLi = styled.li`
  list-style-type: none;

  :not(:first-child) {
    ::before {
      display: inline-block;
      margin: 0 0.25em;
      border-right: 0.1em solid ${colors.darkSilver};
      transform: skew(15deg);
      height: 0.8em;
      content: "";
    }
  }
`;

const BreadcrumbItem = forwardRef(({ active, children }, ref) => {
  // Item should have only child
  const itemChild = React.Children.only(children);

  const itemChildWithAria = useMemo(
    () =>
      React.cloneElement(itemChild, {
        ...itemChild.props,
        ...(() => {
          if (active) {
            return {
              "aria-current": "page",
            };
          }
          return {};
        })(),
      }),
    [itemChild, active],
  );

  return <StyledLi ref={ref}> {itemChildWithAria} </StyledLi>;
});

BreadcrumbItem.propTypes = {
  /** Indicate the active breadcrumb */
  active: PropTypes.bool,
};

BreadcrumbItem.defaultProps = {
  active: false,
};

BreadcrumbItem.displayName = "BreadcrumbItem";

export default BreadcrumbItem;
