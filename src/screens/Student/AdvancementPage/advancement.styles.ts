export const advancementPageStyles = {
  pageContainer: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    width: '100%',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed',
    top: '0',
    borderBottom: '3px solid #555',
  },
  pageTitle: {
    textAlign: 'center' as 'center',
    color: '#fff',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  gridContainer: {
    padding: '2rem',
    marginTop: '9rem',
    marginLeft: '4rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '1.5rem',
    justifyItems: 'center',
  },
  semestreColumn: {
    backgroundColor: '#444',
    padding: '1rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    minWidth: '180px',
    color: '#fff',
  },
  semestreTitle: {
    textAlign: 'center' as 'center',
    fontSize: '1.4rem',
    marginBottom: '0.8rem',
    borderBottom: '2px solid #fff',
    paddingBottom: '0.5rem',
  },
  asignatura: {
    backgroundColor: '#555', // Color por defecto (pendiente)
    padding: '0.8rem',
    marginBottom: '0.8rem',
    borderRadius: '6px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
  },
  asignaturaText: {
    margin: '0.3rem 0',
  },
};
