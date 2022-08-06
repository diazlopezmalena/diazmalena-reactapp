import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className='navbar'> 
            <div className='navbarLogo'>
                <div className='navbarLogoImg'>
                    <Link to='/'><img src='/images/logo.png' alt='Logo de Adorno, book store' /></Link>
                </div>
                <div className='navbarLogoText'>
                    <Link to='/'><h1>Adorno</h1></Link>
                    <h2>BookStore</h2>
                </div>
            </div>
            <div className='navbarMenu'>
                <Link to='/category/ficcion'>Ficción</Link>
                <Link to='/category/cronicas'>Crónicas</Link>
                <Link to='/category/ensayos'>Ensayos</Link>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar