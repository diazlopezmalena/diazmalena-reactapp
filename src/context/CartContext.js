import { useState, createContext } from "react"
import { Link } from 'react-router-dom'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProductToCart = (producto) => {
        if (!isInCart(producto.id)) {
            setCart([...cart, producto])
            console.log(`Has añadido: ${producto.name} de ${producto.author}. Cantidad añadida en tu carrito: ${producto.quantity}. Subtotal: ${producto.price * producto.quantity}`)
        } else {
            const cartUpdate = cart.map(prod => {
                if (prod.id === producto.id) {
                    const newQuantity = {...producto, quantity: producto.quantity}
                    return newQuantity
                } else {
                    return prod
                }
            })
            setCart(cartUpdate)
            console.log(`Has añadido: ${producto.name} de ${producto.author}. Cantidad añadida en tu carrito: ${producto.quantity}. Subtotal: ${producto.price * producto.quantity}`)
        }
    }

    const quantityProduct = (id) => {
        const product = cart.find(prod => prod.id === id)
        return product?.quantity
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    const removeProduct = (id) => {
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const count = () => {
        let acumulador = 0

        cart.forEach(item => {
            acumulador += item.quantity
        });

        if (acumulador === 0) {
            let emptyCart = '🤍';
            return emptyCart
        } else { 
            return acumulador
        }
    }

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

    return (
        <CartContext.Provider value={{cart, addProductToCart, count, removeProduct, clearCart, quantityProduct, totalCart, goToShop }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext