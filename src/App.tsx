import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./screens/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout /> {/* Usamos el nuevo componente que maneja la lógica de Sidebar */}
    </BrowserRouter>
  );
}

export default App;
