import styled, { css } from "styled-components";
import React from "react";
import { prop } from "styled-tools";

const BaseFontIcon = styled.span`
  display: block;
  background-color: transparent;
  text-decoration: none;
  padding: 0;
  text-align: center;
  width: ${({ size }) => size || "16px"};
  height: ${({ size }) => size || "16px"};
  font-size: ${({ size }) => size || "16px"};
  color: ${({ color }) => prop(color, "")};
  cursor: ${({ cursor }) => cursor || "pointer"};
  margin-top: ${({ marginTop }) => marginTop || "0"};
  margin-right: ${({ marginRight }) => marginRight || "0"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0"};
  margin-left: ${({ marginLeft }) => marginLeft || "0"};
  margin: ${({ margin }) => margin || ""};
  line-height: 1;
  ${({ hoverColor }) =>
    hoverColor &&
    css`
      &:hover {
        color: ${prop(hoverColor, "")};
      }
    `};
`;

const Icon = props => {
  const lowerCaseName = props.name.toLowerCase();
  const iconClassName = `fas fa-${lowerCaseName}`;
  const className = `${props.className || ""} ${iconClassName}`;
  const finalClassName = className.trim();

  if (lowerCaseName !== props.name) {
    console.warn(
      `<Icon>'s 'name' prop should not contain uppercase. It is currently set as '${
        props.name
      }'.`
    );
  }

  return <BaseFontIcon {...props} className={finalClassName} />;
};

Icon.defaultProps = {
  onClick: () => {}
};

export default Icon;
