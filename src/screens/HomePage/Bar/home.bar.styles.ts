export const homeBarStyles = {
    homebar: {
        display: 'flex',
        justifyContent: 'center', // Cambiado de 'space-between' a 'center'
        alignItems: 'center',
        backgroundColor: '#333',
        color: '#fff',
        position: 'fixed',
        top: '0',
        width: '100%',
        borderBottom: '3px solid #555',
    },
    logo: {
        marginTop: '1rem', // Añadido para separar el logo del borde superior
        fontSize: '2rem',
        textAlign: 'center', // Añadido para centrar el texto dentro del logo
    },
    loginForm: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute', // Añadido para posicionar el formulario de login
        right: '5rem', // Añadido para alinear el formulario a la derecha
    },
    input: {
        marginRight: '0.5rem',
        padding: '0.5rem',
        fontSize: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        backgroundColor: '#666',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};