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
                  <Link to="/home" style={SideBarStyles.navLink}>Home</Link>
                  <Link to="/schedule" style={SideBarStyles.navLink}>Horario</Link>
                  <Link to="/settings" style={SideBarStyles.navLink}>Configuración</Link>
              </nav>
          )}
      </div>
  );
};

export default SideBar;
