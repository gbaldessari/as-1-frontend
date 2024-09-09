import { useLocation } from "react-router-dom";
import Sidebar from "../screens/SideBar/SideBar";
import { AppRoutes } from "../routes/AppRoutes";

function Layout() {
  const location = useLocation();
  
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
    <div style={{ position: "fixed", left: 0, right: 0, width: '100%' }}>
      {!isHomePage && <Sidebar />}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'auto' }}>
        <AppRoutes />
      </div>
    </div>
  );
}

export default Layout;
