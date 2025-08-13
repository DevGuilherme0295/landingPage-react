import './style.css'

function Header (){

    return (
        <header>
            <div className='navbar1'>
                <h3>Wag!</h3>
                <ul className="headerLista">
                <li>
                    <a href="" className='dropdown'>Services</a>
                </li>
                <li>
                    <a href="" className='dropdown'>Health & Wellness</a>
                </li>
                <li>
                    <a href="">Resources</a>
                </li>
                <li>
                    <a href="">Help Center & Safety</a>
                </li>
                </ul>
            </div>
            <div className='navbar2'>
                <a href='' className='dropdown'>Become a Caregiver</a>
                <a href="" className='dropdown'>My account</a>
            </div>
        </header>
    )
}

export default Header