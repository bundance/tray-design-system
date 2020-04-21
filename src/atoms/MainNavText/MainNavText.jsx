import React from "react";

import Text from "../Text/Text";

const MainNavText = (props) => (
  <Text
    {...props}
    color={props.selected ? "mainNavSelectedText" : "textRegular"}
    bg={props.selected ? "mainNavSelectedBackground" : "inherit"}
  />
);

MainNavText.defaultProps = {
  fontFamily: "Nunito Sans",
  fontSize: 7,
};

export default MainNavText;
