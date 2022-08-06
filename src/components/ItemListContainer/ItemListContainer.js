import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(()=>{
        if (!categoryId) {
            getProducts()
            .then(products=>setProducts(products))
            .catch(error => console.log(error))
        } else {
            getProductsByCategory(categoryId)
            .then(products=>setProducts(products))
            .catch(error=>console.log(error))
        }

    }, [categoryId])

    return (
        <div className='itemListContainer'>
            <h3>{greeting}</h3>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer