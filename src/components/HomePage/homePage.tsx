import React from 'react';
import { homePageStyles } from './homePage.styles';

const HomePage: React.FC = () => {
    return (
        <div style={homePageStyles.container}>
            <header style={homePageStyles.header}>
                <h1 style={homePageStyles.headerTitle}>Gestión de Horarios Universitarios</h1>
                <p style={homePageStyles.headerSubtitle}>
                    Organiza y visualiza tus horarios de clases de manera fácil y eficiente.
                </p>
            </header>
            <section style={homePageStyles.schedulePreview}>
                <h2 style={homePageStyles.sectionTitle}>Vista Previa del Horario</h2>
                <table style={homePageStyles.scheduleTable}>
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
                        {generateScheduleRows()}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

const timeBlocks = [
    { label: 'A', start: '08:10', end: '09:40' },
    { label: 'B', start: '09:55', end: '11:25' },
    { label: 'C', start: '11:40', end: '13:10' },
    { label: 'C2', start: '13:10', end: '14:30' },
    { label: 'D', start: '14:30', end: '16:00' },
    { label: 'E', start: '16:15', end: '17:45' },
    { label: 'F', start: '18:00', end: '19:30' },
    { label: 'G', start: '19:45', end: '21:15' },
    { label: 'H', start: '21:30', end: '23:00' },
];

const generateScheduleRows = () => {
    
    const schedule: { [key: string]: { block: string; subject: string; }[] } = {
        'Lunes': [
            { block: 'A', subject: 'Programación' },
            { block: 'B', subject: 'Programación' },
            { block: 'C', subject: 'Física II' },
        ],
        'Martes': [
            { block: 'B', subject: 'Química' },
            { block: 'D', subject: 'Física II' },
            { block: 'E', subject: 'Álgebra II' },
        ],
        'Miércoles': [
            { block: 'A', subject: 'Dialogo y Fe' },
            { block: 'C', subject: 'Cálculo II' },
            { block: 'F', subject: 'Álgebra II' },
        ],
        'Jueves': [
            { block: 'C', subject: 'Química' },
            { block: 'D', subject: 'Cálculo II' },
            { block: 'G', subject: 'Álgebra II' },
        ],
        'Viernes': [
            { block: 'A', subject: 'Inglés II' },
            { block: 'E', subject: 'Cálculo II' },
        ],
        'Sábado': [
            { block: 'F', subject: 'Inglés II' },
        ],
        'Domingo': [],
    };

    return timeBlocks.map(({ label, start, end }) => (
        <tr key={label}>
            <td style={homePageStyles.scheduleTableCell}>{`${label} (${start}-${end})`}</td>
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day) => {
                const classBlock = schedule[day]?.find(block => block.block === label);
                return (
                    <td key={day} style={classBlock ? { ...homePageStyles.scheduleTableCell, ...homePageStyles.classBlockCell } : homePageStyles.scheduleTableCell}>
                        {classBlock ? classBlock.subject : ''}
                    </td>
                );
            })}
        </tr>
    ));
};

export default HomePage;
