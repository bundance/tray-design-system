import React from "react";

import Box from "../../atoms/HorizontalBox/HorizontalBox";

const Body = (props) => (
  <Box
    minHeight={"100%"}
    display={"flex"}
    flexDirection={"column"}
    backgroundColor={"lightGrey"}
    paddingX={27}
    paddingY={26}
  >
    <Box
      minWidth={"100%"}
      fontFamily={"Nunito Sans"}
      paddingX={24}
      flex={1}
      display={"flex"}
      backgroundColor={"white"}
      flexDirection={"column"}
      justifyContent={"center"}
      {...props}
    />
  </Box>
);

export default Body;
