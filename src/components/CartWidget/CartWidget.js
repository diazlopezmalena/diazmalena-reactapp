import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

   const { count } = useContext(CartContext)
   const runCount = count();   

    return (
        <div className='cartWidget'>
            <Link to='/cart' className='bttnCart'>
                <span>{runCount}</span>
                <img src='/images/cart.png' alt='Icono del carrito.'/>
            </Link>
        </div>
    )
}

export default CartWidget