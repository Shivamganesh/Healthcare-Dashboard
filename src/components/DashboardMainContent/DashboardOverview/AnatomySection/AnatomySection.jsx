import './AnatomySection.css';
import anatomicalHealthData from '../../../../data/anatomicalHealthData';

const AnatomySection = () => {
  return (
    <div className="body-model-section">
      <div className="body-model">
        <div className="body-image">
          <img src="src/assets/anatomy.png" alt="Human Body Model" />
          {anatomicalHealthData.map((dot) => (
            <div
              key={dot.id}
              className={`body-dot ${dot.part}-dot`}
              style={{ top: dot.position.top, left: dot.position.left }}
            >
              <div className={`tooltip ${dot.part}-tooltip`}>
                <div className={`${dot.iconClass}`}></div>
                <span>{dot.tooltip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default AnatomySection;