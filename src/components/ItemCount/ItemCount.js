import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock = 0, initial = 1, add }) => {
    const [count, setCount] = useState(initial)

    const plus = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const less = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className='itemCount'>
            <div className='itemCountQuantity'>
                <button onClick={less} disabled={count === 1}>-</button>
                <p>{count}</p>
                <button onClick={plus} disabled={count === stock}>+</button>
            </div>
            <button className='itemCountButtonAdd' onClick={()=>add(count)}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount