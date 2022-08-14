import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, picture, alt, stock, category, name, author, price, description }) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)
    
    const { addProductToCart, quantityProduct } = useContext(CartContext)

    const onAdd = (quantity) => {
        setQuantityToAdd(quantity)
        const productToAdd = { id, name, author, price, quantity }
        addProductToCart(productToAdd)
    }

    const quantity = quantityProduct(id)

    const bttnCountOrBuy = quantityToAdd === 0 ? <ItemCount stock={stock} initial={quantity} add={onAdd} /> : <Link to='/cart' className='bttnBuy'>Finalizar compra</Link>

    return (
        <article key={id} className='itemDetail'>
            <div className='itemDetailImg'>
                <img src={picture} alt={alt} />
            </div>
            <div className='itemDetailText'>
                <p className='itemDetailCategory'>{category}</p>
                <h2>{name}</h2>
                <h3>{author}</h3>
                <p>${price}</p>
                <p>{description}</p>
                {bttnCountOrBuy}
            </div>
        </article>
    )
}

export default ItemDetail