import React from "react";

import Text from "../Text/Text";

const BodyTitle = (props) => <Text as={"h2"} {...props} />;

BodyTitle.defaultProps = {
  color: "titleText",
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontSize: 8,
};

export default BodyTitle;
