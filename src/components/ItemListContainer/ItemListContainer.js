import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncMock'
import { useEffect, useState } from 'react'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then(products=> {
            setProducts(products)
        })
    }, [])

    return (
        <div className='itemListContainer'>
            <h3>{greeting}</h3>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer