import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav className='navbar'> 
            <div className='navbarLogo'>
                <div className='navbarLogoImg'><img src='images/logo.png' alt='Logo de Adorno, book store' /></div>
                <div className='navbarLogoText'>
                    <h1>Adorno</h1>
                    <h2>BookStore</h2>
                </div>
            </div>
            <div className='navbarMenu'>
                <button>Ficción</button>
                <button>Crónicas</button>
                <button>Ensayos</button>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar