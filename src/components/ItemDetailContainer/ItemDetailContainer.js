import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    //Recibir productos - llamada API UseEffect 
    //Guardarlos en un estado - Se actualiza con el click del user - useState
    //Funcion que .find el id que clickeó el usuario y retorna el ItemDetail

    const [productId, setProductsId ] = useState([])

    const {id} = useParams()

    useEffect(()=>{
        getProductById(id)
        .then(producto => setProductsId(producto))
        .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <ItemDetail {...productId} key={id}/>
        </div>
    )
}

export default ItemDetailContainer