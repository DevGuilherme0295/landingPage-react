import "./style.css";
import Map from '../../../../images/map.png' 
import Calendar from '../../../../images/calendar.png' 
import Checklist from '../../../../images/checklist.png' 

const Description = () => {
  return (
    <>
      <h1>Why Wag?!</h1>
      <div className="description">
        <div className="descIcone">
          <img src={Calendar} alt="" />
          <h4>Flexibility</h4>
          <p>Make money on your own time. Set your <br></br>own schedule. Enjoy the flexibility of <br></br> choosing how and when you want to <br></br>work grab a last minute ASAP walk or <br></br>plan out walks weeks in advance!</p>
        </div>
        <div className="descIcone">
          <img src={Map} alt="" />
          <h4>Technology</h4>
          <p>Wag! is a fast, friendly, and convenient <br></br>platform that offers instant pay, real-time <br></br> GPS tracking, automated report cards, and<br></br> live chat with clients.
          </p>
        </div>
        <div className="descIcone">
          <img src={Checklist} alt="" />
          <h4>Safety</h4>
          <p>Our dedicated 24/7 customer support<br></br> team sticks by you, and services booked<br></br> on the Wag! platform may be protected <br></br>with up to $1M property damage <br></br> protection. See the <br></br>
          customer claims policy for details.</p>
        </div>
      </div>
    </>
  );
};

export default Description;
