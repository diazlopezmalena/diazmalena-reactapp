import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { dataBase } from '../../services/firebase'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    const myCollection = !categoryId ? collection(dataBase, 'products') : query(collection(dataBase, 'products'), where('category', '==', categoryId))

    useEffect(()=>{
        setLoading(true)
        getDocs(myCollection)
        .then(response => {
            const dataAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProducts(dataAdapted)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [categoryId])
    
    const categoryH1 = products[0]?.categoryTitle;

    if(loading) {
        return <h3 className='loading'>Cargando...</h3>
    }

    return (
        <div className='itemListContainer'>
            <h3>{greeting = categoryId ? categoryH1 : greeting}</h3>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer