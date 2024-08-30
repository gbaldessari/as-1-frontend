import React from 'react';
import { schedulePageStyles } from './schedule.page.styles';
import { timeBlocks } from '../../commons/commonComponents';

const SchedulePage: React.FC = () => {
    return (
        <div style={schedulePageStyles.container}>
            <section style={schedulePageStyles.scheduleArea}>
                <h2 style={schedulePageStyles.sectionTitle}>Horario del Estudiante</h2>
                <table style={schedulePageStyles.scheduleTable}>
                    <thead>
                        <tr>
                            <th>Bloque</th>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miércoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                            <th>Sábado</th>
                            <th>Domingo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateEmptyScheduleRows()}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

const generateEmptyScheduleRows = () => {
    return timeBlocks.map(({ label, start, end }) => (
        <tr key={label}>
            <td style={schedulePageStyles.scheduleTableCell}>{`${label} (${start}-${end})`}</td>
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day) => (
                <td key={day} style={schedulePageStyles.scheduleTableCell}></td>
            ))}
        </tr>
    ));
};

export default SchedulePage;
