import React from 'react';
import { scheduleBarStyles } from './schedule.bar.styles';

type ScheduleBarProps = {
  onSelectSchedule: (value: string) => void;
};

const ScheduleBar: React.FC<ScheduleBarProps> = () => {

    return (
        <div style={scheduleBarStyles.controlBar as React.CSSProperties}>
            
        </div>
    );
};

export default ScheduleBar;
