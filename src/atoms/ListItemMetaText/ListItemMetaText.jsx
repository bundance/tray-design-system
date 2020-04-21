import React from "react";

import Text from "../Text/Text";

const ListItemMetaText = (props) => <Text {...props} />;

ListItemMetaText.defaultProps = {
  color: "textLight",
  fontFamily: "Nunito Sans",
  fontWeight: 2,
  fontSize: 6,
};

export default ListItemMetaText;
