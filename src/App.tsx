import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import "./App.css";
import Sidebar from "./components/SideBar/SideBar";
function App() {
  return (
    <BrowserRouter>
      <div style={{ position: "fixed", left: 20, right: 20, width: '100%', }}>
        <Sidebar />
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'auto',}}>
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
