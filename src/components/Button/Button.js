import styled from "styled-components";
import colors from "../../configs/colors";
import forVariant from "../../utils.js/buttoncolor";

const Button = styled.button`
  display: inline-block;

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

  /* padding */
  padding: 5px 10px;

  /* border */
  border-width: 1px;
  border-color: ${(props) => forVariant(props.variant).color};
  border-radius: 3px;

  /* font */
  font-size: 14px;
  font-weight: 450;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;

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

  transition: box-shadow 0.2s ease-in;
  cursor: pointer;
`;

export default Button;
