import React from 'react';
import { scheduleBarStyles } from './schedule.bar.styles';


const ScheduleBar: React.FC = () => {
    return (
        <div style={scheduleBarStyles.controlBar as React.CSSProperties}>
            <h1>Horario</h1>
        </div>
    );
};

export default ScheduleBar;
