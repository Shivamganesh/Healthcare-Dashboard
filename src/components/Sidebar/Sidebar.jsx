import './Sidebar.css';
import { navigationLinks, toolsLinks, settingsLink } from '../../data/navigationLinks';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="health">Health</span>
        <span className="care">care.</span>
      </div>

      <div className="sidebar-section">
        <div className="section-title">General</div>
        {navigationLinks.map((item) => (
          <div key={item.id} className={`menu-item ${item.active ? 'active' : ''}`}>
            <div className={`icon ${item.iconClass}`}></div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="section-title">Tools</div>
        {toolsLinks.map((item) => (
          <div key={item.id} className="menu-item">
            <div className={`icon ${item.iconClass}`}></div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>

      <div className="menu-item settings">
        <div className={`icon ${settingsLink.iconClass}`}></div>
        <span>{settingsLink.title}</span>
      </div>
    </div>
  );
};

export default Sidebar;