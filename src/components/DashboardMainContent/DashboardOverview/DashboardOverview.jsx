import './DashboardOverview.css';
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';
import ActivityFeed from './../ActivityFeed/ActivityFeed';
import CalendarView from './../CalendarView/CalendarView';
import UpcomingSchedule from '../../DashboardMainContent/UpcomingSchedule/UpcomingSchedule';
import SimpleAppointmentCard from '../../SimpleAppointmentCard/SimpleAppointmentCard';


const DashboardOverview = () => {
  return (
    <>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="calendar-nav">
          <div className="week-selector">
            <span>This Week</span>
            <div className="dropdown-icon"></div>
          </div>
          <div className="month-display">October 2021</div>
          <div className="navigation-arrows">
            <div className="arrow-left"></div>
            <div className="arrow-right"></div>
          </div>
        </div>
      </div>

      <div className="content-area">
        <div className="left-panel">
          <div className="anatomy-health-container">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          <ActivityFeed />
        </div>

        {/* Right Panel */}
        { <div className="right-panel">
          <CalendarView />
          <SimpleAppointmentCard />
          <UpcomingSchedule />
        </div> }
      </div>
    </>
  );
};



export default DashboardOverview;