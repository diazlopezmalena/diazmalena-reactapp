import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartWidget = () => {

   const { count } = useContext(CartContext)
   const runCount = count();   

    return (
        <div className='cartWidget'>
            <span>{runCount}</span>
            <img src='/images/cart.png' alt='Icono del carrito.'/>
        </div>
    )
}

export default CartWidget