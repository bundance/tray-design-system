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
const Icon = ({ color, faIcon, iconSrc }) =>
  iconSrc ? (
    <ImgIcon src={iconSrc} />
  ) : (
    <StyledFontAwesomeIcon icon={faIcon} color={color} />
  );

export default Icon;
