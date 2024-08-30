import React from 'react';
import { scheduleBarStyles } from './schedule.bar.styles';

const ScheduleBar: React.FC = () => {
    return (
        <nav style={scheduleBarStyles.navbar}>
            <div style={scheduleBarStyles.navItems}>
                <button style={scheduleBarStyles.button}>Ver Horario</button>
                <button style={scheduleBarStyles.button}>Crear Proyección</button>
                <button style={scheduleBarStyles.button}>Inscribir Asignaturas</button>
            </div>
            <div style={scheduleBarStyles.userSection}>
                <span style={scheduleBarStyles.userText}>Estudiante</span>
                <button style={scheduleBarStyles.logoutButton}>Cerrar Sesión</button>
            </div>
        </nav>
    );
};

export default ScheduleBar;
