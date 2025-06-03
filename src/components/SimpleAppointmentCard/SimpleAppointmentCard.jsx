import './SimpleAppointmentCard.css';

const SimpleAppointmentCard = () => {
 

  return (
      <div class="appointments-section">
                        <div class="appointment-card1 dentist">
                            <div class="appointment-info">
                                <div class="appointment-title">Dentist</div>
                                <div class="appointment-time">09:00-11:00</div>
                                <div class="appointment-doctor">Dr. Cameron Williamson</div>
                            </div>
                            <div class="appointment-icon teeth-icon-white"></div>
                        </div>
                        
                        <div class="appointment-card2 physio">
                            <div class="appointment-info">
                                <div class="appointment-title">Physiotherapy Appointment</div>
                                <div class="appointment-time">11:00-12:00</div>
                                <div class="appointment-doctor">Dr. Kevin Bjanes</div>
                            </div>
                            <div class="appointment-icon physio-icon"></div>
                        </div>
                    </div>
  );
};

export default SimpleAppointmentCard;