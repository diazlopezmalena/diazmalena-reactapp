import './Form.css'
import { useState } from "react"

const Form = ({createOrder}) => {
    const [ name, setName ] = useState('')
    const [ lastname, setLastname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ nameComplete, setNameComplete ] = useState(true)
    const [ emailComplete, setEmailComplete ] = useState(true)
    const [ phoneComplete, setPhoneComplete ] = useState(true)

    const handleChangeValue = (e) => {
        if (e.target.name === 'name') {
            if (e.target.value === undefined ) {
                setNameComplete(true)
            } else {
                setNameComplete(false)
                setName(e.target.value)
            }
        }
        if (e.target.name === 'lastname') { 
            setLastname(e.target.value)
        }
        if (e.target.name === 'email') { 
            if (e.target.value === undefined ) {
                setEmailComplete(true)
            } else {
                setEmailComplete(false)
                setEmail(e.target.value)
            }
        }
        if (e.target.name === 'phone') {
            if (e.target.value === undefined ) {
                setPhoneComplete(true)
            } else {
                setPhoneComplete(false)
                setPhone(e.target.value)
            }
        }
    }

    const displaySendBttn = (nameComplete === false && emailComplete === false && phoneComplete === false) 
                            ? <button onClick={()=>createOrder(name, lastname, email, phone)} className="sendOrder">Generar orden</button>
                            : <div>Completa los campos para hacer tu pedido 📩</div>

    return (
        <>
            <p className='formText'>Completa tus datos y nos pondremos en contacto para coordinar el envío.</p>
            <form className="form">
                <input type="text" required="required" name="name" placeholder="Nombre" value={name} onChange={handleChangeValue}/>
                <input type="text" required="required" name="lastname" placeholder="Apellido" value={lastname} onChange={handleChangeValue}/>
                <input type="email" required="required" name="email" placeholder="E-mail" value={email} onChange={handleChangeValue} />
                <input type="number" required="required" name="phone" placeholder="Teléfono" value={phone} onChange={handleChangeValue} />
                {displaySendBttn}             
            </form>
        </>
    )
}

export default Form