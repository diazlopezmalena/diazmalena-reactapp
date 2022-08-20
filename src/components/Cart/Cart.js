import './Cart.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, removeProduct, clearCart } = useContext(CartContext)

    const mapCart = cart.map(item => {
        return (
            <div key={item.id} className='itemInCart'>
                <p className='itemInCartName'>{item.name} <span>de {item.author}</span></p>
                <p className='itemInCartQuantity'>Cantidad: {item.quantity}</p>
                <p className='itemInCartPrice'>Sub-total: ${item.price * item.quantity}</p>
                <button className='itemInCartDelete' onClick={() => removeProduct(item.id)}><img src='https://i.ibb.co/HpfgwJy/trash.png' alt='trash' /></button>
            </div>
        )
    })

    const totalCart = () => {
        let total = 0;

        cart.forEach(element => {
            total += element.price*element.quantity;
        });

        return total
    }    

    const goToShop = () => {
        return (
            <div className='emptyCart'>
                <p>Tu carrito está vacío 📖💔</p>
                <Link to='/' className='emptyCartButton'>Ir a la tienda</Link>
            </div>
        )
    }

    const finishBuy = () => {
        return (
            <>
                <div className='cartTotal'>
                    <p className='cartTotalText'>Total:</p> 
                    <p className='cartTotalNumber'>${totalCart()}</p>
                </div>
                <div className='cartButton'>
                    <button onClick={() => clearCart()} className='cartButtonClean'>Limpiar carrito</button>
                    <button className='cartButtonBuy'>Continuar compra</button>
                </div>
            </>
        )
    }

    const bttnGoShopOrClear = cart.length === 0 ? goToShop() : finishBuy()

    return (
        <section className='cart'>
            <h2>Carrito</h2>
            {mapCart}
            {bttnGoShopOrClear}
        </section>
    )
}

export default Cart