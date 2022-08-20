import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { dataBase } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [productId, setProductsId ] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(()=>{
        getDoc(doc(dataBase, 'products', id))
        .then(response => {
            const data = response.data()
            const dataProductAdapted = { id: response.id, ...data }
            setProductsId(dataProductAdapted)
        })
        .catch(error => console.log(error))
        .finally(()=>setLoading(false))
    }, [id])

    if (loading) {
        return <h2 className='loading'>Cargando...</h2>
    }

    return (
        <div>
            <ItemDetail {...productId} key={id}/>
        </div>
    )
}

export default ItemDetailContainer