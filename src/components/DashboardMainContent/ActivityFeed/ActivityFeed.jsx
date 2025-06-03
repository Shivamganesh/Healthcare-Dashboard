import './ActivityFeed.css';
import activityFeedData from '../../../data/activityFeedData';

const ActivityFeed = () => {
  return (
    <div className="activity-section">
      <div className="activity-header">
        <h2>Activity</h2>
        <div className="activity-count">{activityFeedData.totalAppointments} appointment on this week</div>
      </div>
      <div className="activity-chart">
        <div className="chart-bars">
          {/* Bars rendered via CSS background */}
        </div>
        <div className="chart-days">
          {activityFeedData.days.map((day, index) => (
            <span key={index}>{day}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;