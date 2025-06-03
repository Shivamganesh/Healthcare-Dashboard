import './HealthStatusCards.css';
import healthStatusCardsData from '../../../../data/healthStatusCardsData';

const HealthStatusCards = () => {
  return (
    <div className="body-parts-container">
      <div className="body-parts-grid">
        {healthStatusCardsData.map((card) => (
          <div key={card.id} className={`organ-square ${card.organ}-square`}>
            <div className={`part-icon ${card.iconClass}`}></div>
            <div className="part-info">
              <div className="part-name">{card.name}</div>
              <div className="part-date">Date: 26 Oct 2021</div>
              <div className={`progress-bar grey`}>
                <div className={`progress-bar1 ${card.progressColor}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthStatusCards;