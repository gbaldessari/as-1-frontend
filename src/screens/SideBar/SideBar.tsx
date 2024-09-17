import React, { useState } from 'react';
import { SideBarStyles } from './SideBar.styles';
import { Link } from 'react-router-dom';

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
      setIsOpen(!isOpen);
  };

  return (
      <div style={{ ...SideBarStyles.sidebar, width: isOpen ? '250px' : '40px' }}>
          <button style={SideBarStyles.toggleButton} onClick={toggleSidebar}>
              {isOpen ? '←' : '→'}
          </button>
          {isOpen && (
              <nav style={SideBarStyles.nav}>
                  <Link to="/student/schedule" style={SideBarStyles.navLink}>Horario</Link>
                  <Link to="/student/projection" style={SideBarStyles.navLink}>Crear Proyección</Link>
                  <Link to="/student/advancement" style={SideBarStyles.navLink}>Avance Curricular</Link>
                  <Link to="/student/mesh" style={SideBarStyles.navLink}>Mi Malla</Link>
                  <Link to="/home" style={SideBarStyles.navLink}>Cerrar Sesión</Link>
              </nav>
          )}
      </div>
  );
};

export default SideBar;
