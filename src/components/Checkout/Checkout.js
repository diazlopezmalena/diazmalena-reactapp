import './Checkout.css'
import CartContext from "../../context/CartContext"
import { useState, useContext } from "react"
import Form from "../Form/Form"

import { dataBase } from "../../services/firebase"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    const { cart, totalCart, count, goToShop, clearCart } = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)

    const navigate = useNavigate()
    
    const total = totalCart()
    const totalQuantity = count()

    const createOrder = async (name, lastname, email, phone) => {
        try { 
            const order = {
                customer: {
                    name,
                    lastname,
                    email,
                    phone,
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }
            const ids = cart.map(prod => prod.id)
        
            const productsRef = collection(dataBase, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(dataBase)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(dataBase, 'orders')
                const orderAdded = await addDoc(orderRef, order)

                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            } else {
                console.log('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }        
    }

    if (isLoading) {
        return <h1>Se esta generando tu orden...</h1>
    }

    if (orderCreated) {
        return (
            <div className='orderCreated'>
                <h2>La orden fue creada correctamente</h2>
                <p>Será redirigido al listado de productos en 3 segundos.</p>
                <div>
                    <img src='https://i.ibb.co/YLpZcJN/spinner.gif' alt='spinner' />
                </div>
            </div>
        )
         
    }

    const bttnGoShopOrCreateOrder = cart.length === 0 ? goToShop() : <Form createOrder={createOrder} />

    
    return (
        <>
            <h2 className='title'>Checkout</h2>
            {bttnGoShopOrCreateOrder}
        </>
    )
}

export default Checkout