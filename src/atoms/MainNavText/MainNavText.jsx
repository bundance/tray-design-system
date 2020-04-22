import React from "react";

import Link from "../Link/Link";

const MainNavText = (props) => (
  <Link
    {...props}
    textDecoration={"none"}
    color={
      props.selected || props.hover ? "mainNavSelectedText" : "textRegular"
    }
    fontWeight={props.selected || props.hover ? "600" : "300"}
    border={"none"}
  />
);

MainNavText.defaultProps = {
  fontFamily: "Nunito Sans",
  fontSize: 7,
};

export default MainNavText;
