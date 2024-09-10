import React from 'react';
import { homePageStyles } from './home.page.styles';
import { timeBlocks } from '../../commons/commonComponents';
import { ejemploHorarios } from '../../commons/ejemploHorarios';

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
                <table style={homePageStyles.scheduleTable}>
                    <thead>
                        <tr>
                            <th style={{width: '10%'}}>Bloque</th>
                            <th>Lunes</th>
                            <th>Martes</th>
                            <th>Miércoles</th>
                            <th>Jueves</th>
                            <th>Viernes</th>
                            <th>Sábado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generateScheduleRows(ejemploHorarios)}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

const generateScheduleRows = (schedule: any) => {
    return timeBlocks.map(({ label, start, end }) => (
        <tr key={label}>
            <td style={homePageStyles.scheduleTableCell}>{`${label} (${start}-${end})`}</td>
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'].map((day) => {
                const classBlock = schedule?.find((subject: any) =>
                    subject.blocks.find((block: any) => block.block === label && block.day === day)
                );
                return (
                    <td key={day} style={classBlock ? { ...homePageStyles.scheduleTableCell, ...homePageStyles.classBlockCell } : homePageStyles.scheduleTableCell}>
                        {classBlock ? classBlock.name : ''}
                    </td>
                );
            })}
        </tr>
    ));
};

export default HomePage;
