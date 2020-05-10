import { css } from "styled-components";
import forVariant from "../utils.js/buttoncolor";
import colors from "../configs/colors";

const buttonMixin = css`
  /* color */
  color: ${(props) => {
    if (props.outline) {
      return forVariant(props.variant).color;
    }

    return colors.white;
  }};
  background-color: ${(props) => {
    if (props.outline) {
      return colors.white;
    }
    return forVariant(props.variant).color;
  }};

  /* border */
  border-color: ${(props) => forVariant(props.variant).color};

  /* when hover */
  :hover {
    box-shadow: 0 0 2px 1px ${(props) => forVariant(props.variant).color};
  }

  :focus {
    outline: none;
    box-shadow: 0 0 2px 1px ${(props) => forVariant(props.variant).color};
  }

  /* when disabled */
  :disabled {
    color: ${forVariant("disabled").color};
    border-color: ${forVariant("disabled").color};
    background-color: ${colors.white};
    cursor: not-allowed;

    :hover {
      box-shadow: none;
    }
  }
`;

export default buttonMixin;
