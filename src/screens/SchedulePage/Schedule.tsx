import React from 'react';
import SchedulePage from './schedule.page';
import ScheduleBar from './schedule.bar';

const Schedule: React.FC = () => {
  return (
    <div>
      <ScheduleBar />
      <SchedulePage />
    </div>
  );
};

export default Schedule;