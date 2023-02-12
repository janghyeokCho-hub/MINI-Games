import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowLeft,
  faCubesStacked,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import IconWithText from "./components/IconWithText";
import { useNavigate } from "react-router-dom";

const LeftSideBar = () => {
  type MenuType = string;
  const navigate = useNavigate();
  const [menu, setMenu] = useState<MenuType>("home");
  const { collapseSidebar, collapsed } = useProSidebar();

  const handleGameChange = (game: string) => {
    setMenu(game);
    switch (game) {
      case "home":
        navigate("/");
        break;
      case "tetris":
        navigate("/tetris");
        break;
    }
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div>
        <FontAwesomeIcon
          icon={collapsed ? faBars : faArrowLeft}
          onClick={() => collapseSidebar()}
          size="xl"
          style={{ cursor: "pointer" }}
        />
        <Sidebar>
          <Menu>
            <MenuItem
              onClick={() => handleGameChange("home")}
              style={{ backgroundColor: "#fff", padding: 0 }}
            >
              <IconWithText
                icon={faHouse}
                size="lg"
                text="HOME"
                isActive={menu === "home"}
              />
            </MenuItem>
            <MenuItem
              onClick={() => handleGameChange("tetris")}
              style={{ backgroundColor: "#fff", padding: 0 }}
            >
              <IconWithText
                icon={faCubesStacked}
                size="lg"
                text="테트리스"
                isActive={menu === "tetris"}
              />
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};

export default LeftSideBar;
