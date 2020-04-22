import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import { color, flexbox, layout, space } from "styled-system";

const ImgIcon = styled.img(flexbox, layout, space);
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${color}
  ${flexbox}
  ${layout},
  ${space}
`;

// Renders a Font Awesome icon if one's provided, or else a standard image icon
const Icon = ({ faIcon, iconSrc, ...props }) =>
  iconSrc ? (
    <ImgIcon src={iconSrc} {...props} />
  ) : (
    <StyledFontAwesomeIcon icon={faIcon} color={color} {...props} />
  );

export default Icon;
