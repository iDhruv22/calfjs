import styled from "styled-components";
import borderMixin from "../../mixins/border";
import buttonMixin from "../../mixins/button";
import fontMixin from "../../mixins/font";

const Button = styled.button`
  display: inline-block;

  /* padding */
  padding: 5px 10px;

  /* border mixin */
  ${borderMixin}

  /* button mixin */
  ${buttonMixin}

  /* font */
  ${fontMixin}
  font-weight: 450;

  text-align: center;
  white-space: nowrap;
  vertical-align: middle;

  transition: box-shadow 0.2s ease-in;
  cursor: pointer;
`;

export default Button;
