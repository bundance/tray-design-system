import React from "react";

import Box from "../../atoms/Box/Box";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import Header from "../../organisms/Header/Header";
import Body from "../../organisms/Body/Body";

const Authentication = (props) => (
  <Box
    minHeight={"100%"}
    display={"flex"}
    flexDirection={"row"}
    alignItems={"stretch"}
  >
    <Sidebar selectedMenuItem="Authentications" />
    <Box display={"flex"} flexDirection={"column"} flexGrow={1}>
      <Header
        title="Authentications"
        buttonText="New Authentication"
        onClick={() => alert("New Authentication clicked")}
      />
      <Body />
    </Box>
  </Box>
);

export default Authentication;
