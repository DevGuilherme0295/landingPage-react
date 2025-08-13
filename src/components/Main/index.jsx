import RoundCards from "./coponents/roundCards";
import "./style.css";

function Main() {
  return (
    <main>
      <div className="principal">
        <div className="imgPrincipal">
          <RoundCards />
        </div>
        <div className="card">
          <p>Please enter your name as it appears on your ID.</p>
          <input type="text" placeholder="Legal first name"></input>
          <input type="text" placeholder="Legal middle name"></input>
          <input type="text" placeholder="Legal last name"></input>
          <input type="email" placeholder="Email address"></input>
          <input type="tel" placeholder=" Phone number"></input>
          <div className="note">
            By submitting my phone number, I agree to receive automated and
            non-automated transactional and marketing calls/texts from Wag!.
            Consent not required: text STOP to 24006 to apt out. Opy out
            instructions subject to change. Message and data rates may apply.
            Mobile Terms apply.
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="terms"></input>
            <label for="terms">
              I agree to Wag's Terms and Privacy Policy.
            </label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="usresident"></input>
            <label for="usresident">I confirm that I am a US resident</label>
          </div>
          <button className="btn" disabled>
            Get Started
          </button>
        </div>
      </div>
      <div>
        
      </div>
    </main>
  );
}

export default Main;
