import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faArrowLeft,
  faCubesStacked,
} from "@fortawesome/free-solid-svg-icons";
import IconWithText from "./components/IconWithText";

const LeftSideBar = () => {
  type MenuType = string;
  const [menu, setMenu] = useState<MenuType | null>(null);
  const { collapseSidebar, collapsed } = useProSidebar();

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
              onClick={() => setMenu("block")}
              style={{ backgroundColor: "#fff", padding: 0 }}
            >
              <IconWithText
                icon={faCubesStacked}
                size="lg"
                text="테트리스"
                isActive={menu === "block"}
              />
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};

export default LeftSideBar;
