import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProSidebar } from "react-pro-sidebar";
import styled from "styled-components";

interface Props {
  isActive?: boolean;
  collapsed: boolean;
}

const StyledDiv = styled.div<Props>`
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.isActive ? "#edeefa;" : "#fff")};
  color: ${(props) => (props.isActive ? "#394bc2;" : "#000000")};
`;

const IconWithText = (props: any) => {
  const { icon, text, size, isActive } = props;
  const { collapsed } = useProSidebar();

  return (
    <div>
      <StyledDiv isActive={isActive} collapsed={collapsed}>
        <FontAwesomeIcon
          icon={icon}
          size={size}
          style={{
            marginRight: collapsed ? 0 : "10px",
          }}
        />
        {!collapsed && text}
      </StyledDiv>
    </div>
  );
};

export default IconWithText;
