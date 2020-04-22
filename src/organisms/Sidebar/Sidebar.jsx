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

const Sidebar = ({ onClick, selectedMenuItem }) => {
  const [selectedItem, setSelectedItem] = React.useState(selectedMenuItem);

  const handleClick = (itemText) => {
    setSelectedItem(itemText);
    onClick(itemText);
  };
  return (
    <Box
      as={"aside"}
      borderRight={"1px solid"}
      borderRightColor="neutralMediumDark"
      minHeight={"100%"}
      display={"flex"}
      flexDirection={"column"}
      paddingY={20}
      paddingX={13}
      width={240}
      backgroundColor={"white"}
    >
      <Box as="nav" flex="1" alignItems={"start"}>
        <MainNavItem
          itemText="Dashboard"
          href="#"
          faIcon={faHome}
          onClick={() => handleClick("Dashboard")}
          selected={selectedItem === "Dashboard"}
        />
        <MainNavItem
          itemText="Analytics"
          href="#"
          faIcon={faChartBar}
          onClick={() => handleClick("Analytics")}
          selected={selectedItem === "Analytics"}
        />
        <MainNavItem
          itemText="Library"
          href="#"
          faIcon={faBookOpen}
          onClick={() => handleClick("Library")}
          selected={selectedItem === "Library"}
        />
        <MainNavItem
          itemText="Authentications"
          href="#"
          faIcon={faLock}
          onClick={() => handleClick("Authentications")}
          selected={selectedItem === "Authentications"}
        />
        <MainNavItem
          itemText="Settings & People"
          href="#"
          faIcon={faCog}
          onClick={() => handleClick("Settings")}
          selected={selectedItem === "Settings"}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
