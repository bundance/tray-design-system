import React from "react";

import Text from "../Text/Text";

const HeaderText = (props) => <Text as={"h1"} {...props} />;

HeaderText.defaultProps = {
  border: "1px solid",
  color: "titleText",
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontSize: 10,
};

export default HeaderText;
