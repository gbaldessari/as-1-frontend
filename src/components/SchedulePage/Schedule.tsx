import React from 'react';
import ScheduleBar from './Bar/schedule.bar';
import SchedulePage from './Page/schedule.page';

const Schedule: React.FC = () => {
  return (
    <div>
      <ScheduleBar />
      <SchedulePage />
    </div>
  );
};

export default Schedule;