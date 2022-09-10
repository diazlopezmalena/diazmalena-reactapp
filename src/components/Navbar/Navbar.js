import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

    const [ menuMobile, setMenuMobile ] = useState('none')
    const [ closeMenuMobile, setCloseMenuMobile ] = useState('../images/menu.png')
    const [ imgClassName, setImgClassName ] = useState('open')

    const showMenuHamburger = () => {

        if (menuMobile === 'none') {
            setMenuMobile('flex')
            setCloseMenuMobile('../images/cerrar.png')
            setImgClassName('close')
        } else {
            setMenuMobile('none')
            setCloseMenuMobile('../images/menu.png')
            setImgClassName('open')
        }
    }

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
            <div className='navbarMenuMobile' >
                <img src={closeMenuMobile} alt='Menú hamburguesa' className={imgClassName} onClick={()=>showMenuHamburger()}/>
                <div className='navbarMenuMobileContent' style={{display: menuMobile}}>
                    <Link to='/category/ficcion'>Ficción</Link>
                    <Link to='/category/cronicas'>Crónicas</Link>
                    <Link to='/category/ensayos'>Ensayos</Link>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default Navbar