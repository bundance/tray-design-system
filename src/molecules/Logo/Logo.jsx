import React from "react";

import HorizontalBox from "../../atoms/HorizontalBox/HorizontalBox";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";

const Logo = ({ href, logo, onClick }) => {
  const [state, setState] = React.useState("init");
  return (
    <HorizontalBox
      justifyContent="flex-start"
      onMouseOver={() => setState("hover")}
      onMouseOut={() => setState("idle")}
      onClick={onClick}
      backgroundColor={state === "hover" ? "greyLight" : "inherit"}
      border={state === "hover" ? "1px solid greyLight" : "inherit"}
      borderRadius={4}
      paddingX={20}
    >
      <Icon iconSrc={logo} width={"30"} />
      <Text marginLeft={8} href={href} fontSize={10} color="">
        tray.io
      </Text>
    </HorizontalBox>
  );
};
export default Logo;
