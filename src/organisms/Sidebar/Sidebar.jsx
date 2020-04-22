import React from "react";

import Box from "../../atoms/Box/Box";
import MainNavItem from "../../molecules/MainNavItem/MainNavItem";
import {
  faBookOpen,
  faCog,
  faChartBar,
  faHome,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ buttonText, onClick, title }) => {
  const [state, setState] = React.useState("");

  const handleClick = (itemText) => setState(itemText);
  return (
    <Box
      as={"aside"}
      borderRight={"1px solid"}
      borderRightColor="neutralMediumDark"
      height={"100%"}
      paddingY={20}
      paddingX={13}
      width={240}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box flexWrap="1" alignItems={"start"}>
        <MainNavItem
          itemText="Dashboard"
          href="#"
          faIcon={faHome}
          onClick={() => handleClick("Dashboard")}
          selected={state === "Dashboard"}
        />
        <MainNavItem
          itemText="Analytics"
          href="#"
          faIcon={faChartBar}
          onClick={() => handleClick("Analytics")}
          selected={state === "Analytics"}
        />
        <MainNavItem
          itemText="Library"
          href="#"
          faIcon={faBookOpen}
          onClick={() => handleClick("Library")}
          selected={state === "Library"}
        />
        <MainNavItem
          itemText="Authentications"
          href="#"
          faIcon={faLock}
          onClick={() => handleClick("Authentications")}
          selected={state === "Authentications"}
        />
        <MainNavItem
          itemText="Settings & People"
          href="#"
          faIcon={faCog}
          onClick={() => handleClick("Settings")}
          selected={state === "Settings"}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
