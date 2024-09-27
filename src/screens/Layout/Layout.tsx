import { useLocation } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";
import { AppRoutes } from "../../routes/AppRoutes";
import { layoutStyles } from "./layout.styles";

function Layout() {
  const location = useLocation();
  
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
    <div style={layoutStyles.container as React.CSSProperties}>
      {!isHomePage && <Sidebar />}
      <div style={layoutStyles.body as React.CSSProperties}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default Layout;
