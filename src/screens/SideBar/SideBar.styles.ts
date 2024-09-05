export const SideBarStyles = {
  sidebar: {
      position: 'fixed' as 'fixed',
      top: '0',
      left: '0',
      height: '100%',
      backgroundColor: '#2c2c2c',
      color: '#fff',
      padding: '1rem',
      boxShadow: '2px 0 5px rgba(0, 0, 0, 0.3)',
      transition: 'width 0.3s ease',
      zIndex: 1000, // Hace que la barra esté sobre el contenido
  },
  toggleButton: {
      position: 'absolute' as 'absolute',
      top: '1rem',
      right: '-20px',
      backgroundColor: '#444',
      color: '#fff',
      border: 'none',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      zIndex: 1001,
      borderRadius: '30px',
  },
  nav: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      marginTop: '2rem',
  },
  navLink: {
      padding: '1rem 0',
      color: '#fff',
      textDecoration: 'none',
      transition: 'color 0.3s',
      fontSize: '1.25rem',
      display: 'block',
      textAlign: 'center' as 'center',
  },
  navLinkHover: {
      color: '#ddd',
  },
};
