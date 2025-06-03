import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="search-bar">
        <div className="search-icon"></div>
        <input type="text" placeholder="Search" />
      </div>
      <div className="notification-icon"></div>
      <div className="user-actions">
        <div className="user-icon"></div>
        <div className="add-icon"></div>
      </div>
    </div>
  );
};

export default Header;