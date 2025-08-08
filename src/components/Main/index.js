import './style.css'
import principalImg from './images/principal.png';

function Main() {

    return (
        <main>
            <div className='principal'>
                <div className='imgPrincipal'>
                    <img src={principalImg}></img>
                </div>
                <div className='cardPrincipal'>

                </div>
            </div>
        </main>
    )
}

export default Main