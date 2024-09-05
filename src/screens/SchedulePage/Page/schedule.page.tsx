import React, { useState } from 'react';
import { ejemploHorarios } from '../../commons/mocks/ejemploHorarios';
import { schedulePageStyles } from './schedule.page.styles';
import ScheduleBar from '../Bar/schedule.bar';
import { timeBlocks } from '../../commons/commonComponents';

const SchedulePage: React.FC = () => {
    const [schedule, setSchedule] = useState(ejemploHorarios);

    const handleSelectSchedule = (view: string) => {
        if (view === 'student') {
            setSchedule(ejemploHorarios);
        } else {
            setSchedule([]);
        }
    };

    return (
        <div style={schedulePageStyles.container}>
            <ScheduleBar onSelectSchedule={handleSelectSchedule} />
            <section style={schedulePageStyles.scheduleArea}>
                <table style={schedulePageStyles.scheduleTable}>
                    <thead>
                        <tr>
                            <th style={{width: '10%'}}>Bloque</th>
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
                        {generateScheduleRows(schedule)}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

const generateScheduleRows = (schedule: any) => {
    return timeBlocks.map(({ label, start, end }) => (
        <tr key={label}>
            <td style={schedulePageStyles.scheduleTableCell}>{`${label} (${start}-${end})`}</td>
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map((day) => {
                const classBlock = schedule?.find((subject: any) =>
                    subject.blocks.find((block: any) => block.block === label && block.day === day)
                );
                return (
                    <td key={day} style={classBlock ? { ...schedulePageStyles.scheduleTableCell, ...schedulePageStyles.classBlockCell } : schedulePageStyles.scheduleTableCell}>
                        {classBlock ? classBlock.name : ''}
                    </td>
                );
            })}
        </tr>
    ));
};

export default SchedulePage;