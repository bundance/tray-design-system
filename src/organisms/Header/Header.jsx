import React from "react";

import Box from "../../atoms/Box/Box";
import HeaderText from "../../atoms/HeaderText/HeaderText";
import Button from "../../atoms/Button/Button";

const Header = ({ buttonText, onClick, title }) => (
  <Box
    as={"header"}
    alignItems="center"
    borderBottom={"1px solid"}
    borderBottomColor="neutralMediumDark"
    display="flex"
    justifyContent="space-between"
    paddingY={20}
    paddingX={60}
  >
    <HeaderText>{title}</HeaderText>
    <Button onClick={onClick}>{buttonText}</Button>
  </Box>
);

export default Header;
