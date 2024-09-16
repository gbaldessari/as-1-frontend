import { useLocation } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";
import { AppRoutes } from "../../routes/AppRoutes";
import { layoutStyles } from "./layout.styles";

function Layout() {
  const location = useLocation();
  
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
    <div style={{ position: "fixed", left: 0, right: 0, width: '100%' }}>
      {!isHomePage && <Sidebar />}
      <div style={layoutStyles.container as React.CSSProperties}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default Layout;
