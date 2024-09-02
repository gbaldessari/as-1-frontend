import React, { useState } from 'react';
import { scheduleBarStyles } from './schedule.bar.styles';

type ScheduleBarProps = {
  onSelectSchedule: (value: string) => void;
};

const ScheduleBar: React.FC<ScheduleBarProps> = ({ onSelectSchedule }) => {
    const [view, setView] = useState('student');

    const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setView(e.target.value);
        onSelectSchedule(e.target.value);
    };

    return (
        <nav style={scheduleBarStyles.controlBar}>
            <select
                style={scheduleBarStyles.dropdown}
                value={view}
                onChange={handleViewChange}
            >
                <option value="student">Horario del Estudiante</option>
                <option value="projection">Proyección de Horario</option>
                <option value="enrollment">Inscripción de Asignaturas</option>
            </select>
        </nav>
    );
};

export default ScheduleBar;
