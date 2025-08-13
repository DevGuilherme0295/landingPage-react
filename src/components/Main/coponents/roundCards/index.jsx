import "./style.css"
import Bolsonaro from '../../../../images/bolsonaro.png'
import Lula from '../../../../images/lula.png'
import Trump from '../../../../images/trump.png'
import Biden from '../../../../images/biden.png'
import Putin from '../../../../images/putin.png'

const RoundCards = () => {
    return(
        <>
        <div className="container">
            <div className="roundCards">
                <img src={Bolsonaro} alt="" />
            </div>
            <div className="roundCards">
                <img src={Lula} alt="" />
            </div>
            <div className="roundCards">
                <img src={Biden} alt="" />
            </div>
            <div className="roundCards">
                <img src={Trump} alt="" />
            </div>
            <div className="roundCards">
                <img src={Putin} alt="" />
            </div>
             <div className="roundCards">
                <img src={Biden} alt="" />
            </div>
            
        </div>
        </>
    )
}

export default RoundCards