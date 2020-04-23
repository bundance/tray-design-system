import React from "react";

import HorizontalBox from "../../atoms/HorizontalBox/HorizontalBox";
import MainNavText from "../../atoms/MainNavText/MainNavText";
import Icon from "../../atoms/Icon/Icon";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MainNavItem = ({ href, itemText, faIcon, onClick, selected }) => {
  const [state, setState] = React.useState("init");
  return (
    <HorizontalBox
      justifyContent="space-between"
      onMouseOver={() => setState("hover")}
      onMouseOut={() => setState("idle")}
      onClick={onClick}
      backgroundColor={state === "hover" ? "greyLight" : "inherit"}
      border={state === "hover" ? "1px solid greyLight" : "inherit"}
      borderRadius={4}
      paddingX={20}
    >
      <HorizontalBox paddingY={13} justifyContent="flex-start">
        <Icon
          faIcon={faIcon}
          height={22}
          color={
            selected || state === "hover"
              ? "mainNavSelectedText"
              : "textRegular"
          }
        />
        <MainNavText
          data-testid="main-nav-text"
          marginLeft={8}
          href={href}
          selected={selected}
          hover={state === "hover"}
        >
          {itemText}
        </MainNavText>
      </HorizontalBox>
      {(state === "hover" || selected) && (
        <Icon
          faIcon={faChevronRight}
          height={22}
          color={"mainNavSelectedText"}
        />
      )}
    </HorizontalBox>
  );
};
export default MainNavItem;
