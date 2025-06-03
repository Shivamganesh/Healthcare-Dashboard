import './CalendarView.css';
import calendarData from '../../../data/calendarData';

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="days-row">
        {calendarData.map((day, index) => (
          <div key={index} className="day-column">
            <div className="day-name">{day.day}</div>
            <div className="day-number">{day.number}</div>
            {day.times.map((time, i) => (
              <div key={i} className={`time-slot ${time.includes(' ') ? time.split(' ')[1] : ''}`}>
                {time.includes(' ') ? time.split(' ')[0] : time}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;