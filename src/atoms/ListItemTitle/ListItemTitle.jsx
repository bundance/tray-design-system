import React from "react";

import Text from "../Text/Text";

const ListItemTitle = (props) => <Text as={"div"} {...props} />;

ListItemTitle.defaultProps = {
  color: "titleText",
  fontSize: 7,
};

export default ListItemTitle;
