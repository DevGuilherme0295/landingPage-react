import "./style.css";
import Cachorro from "../../../../images/cachorro.png"

const Advertising = () => {
  return (
    <>
    <div className="advertising">
      <div>
        <h1>Love Dogs? Get paid for it!</h1>
        <p>
          Caring for dogs Is what you do best. Connecting dog walkers, sitters,
          and trainers with a <br></br>nationwide community of pet parents who
          have dog walking. overnight sitting & boarding,<br></br> or training
          needs is what we do best. Build your business and become your own boss
          with<br></br> Wag!.
        </p>
        <p className="fraseVerde">Meet some Pet Caregivers who walk for Wog!</p>
      </div>
      <div>
        <img id="imagemCachorro" src={Cachorro} alt="" />
      </div>
    </div>

    </>
  );
};

export default Advertising;
