
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import DashboardMainContent from './components/DashboardMainContent/DashboardMainContent';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <DashboardMainContent />
      </main>
    </div>
  );
}

export default App;