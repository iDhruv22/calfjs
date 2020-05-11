import { css } from "styled-components";
import colors from "../configs/colors";

const color = css`
  color: ${(props) => {
    if (props.variant === "success") {
      return colors.darkGreen;
    } else if (props.variant === "info") {
      return colors.darkBlue;
    } else if (props.variant === "danger") {
      return colors.darkRed;
    } else if (props.variant === "warning") {
      return colors.darkYellow;
    }
    return colors.darkMidnightBlue;
  }};
`;

const borderColor = css`
  border-color: ${(props) => {
    if (props.variant === "success") {
      return colors.green;
    } else if (props.variant === "info") {
      return colors.blue;
    } else if (props.variant === "danger") {
      return colors.red;
    } else if (props.variant === "warning") {
      return colors.yellow;
    }
    return colors.midnightBlue;
  }};
`;

const backgroundColor = css`
  background-color: ${(props) => {
    if (props.variant === "success") {
      return colors.greenLight;
    } else if (props.variant === "info") {
      return colors.blueLight;
    } else if (props.variant === "danger") {
      return colors.redLight;
    } else if (props.variant === "warning") {
      return colors.yellowLight;
    }
    return colors.midnightBlueLight;
  }};
`;

const boxShadowColor = css`
  box-shadow: 0 0 2px 1px
    ${(props) => {
      if (props.variant === "success") {
        return colors.greenLight;
      } else if (props.variant === "info") {
        return colors.blueLight;
      } else if (props.variant === "danger") {
        return colors.redLight;
      } else if (props.variant === "warning") {
        return colors.yellowLight;
      }
      return colors.midnightBlueLight;
    }};
`;

const alertMixin = css`
    ${color}
    ${borderColor}
    ${backgroundColor}
`;

export default alertMixin;
export { color, borderColor, backgroundColor, boxShadowColor };
