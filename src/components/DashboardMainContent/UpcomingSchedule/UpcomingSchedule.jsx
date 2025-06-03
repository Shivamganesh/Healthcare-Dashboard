import './UpcomingSchedule.css';
import upcomingAppointments from '../../../data/upcomingAppointments';

const UpcomingSchedule = () => {
  return (
    <div className="schedule-section">
      {upcomingAppointments.map((group) => (
        <div key={group.id} className="schedule-day">
          <div className="schedule-day-title">{group.day}</div>
          <div className="schedule-cards">
            {group.appointments.map((appt, index) => (
              <div key={index} className="schedule-card">
                <div className="schedule-card-info">
                  <div className="schedule-card-title">{appt.title}</div>
                  <div className="schedule-card-time">{appt.time}</div>
                </div>
                <div className={`schedule-card-icon ${appt.iconClass}`}></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;