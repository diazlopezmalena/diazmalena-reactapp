import './Form.css'
import { useState } from "react"

const Form = ({createOrder}) => {
    const [ name, setName ] = useState('')
    const [ lastname, setLastname ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')

    const handleChangeValue = (e) => {
        if (e.target.name === 'name') { 
            setName(e.target.value)
        }
        if (e.target.name === 'lastname') { 
            setLastname(e.target.value)
        }
        if (e.target.name === 'email') { 
            setEmail(e.target.value)
        }
        if (e.target.name === 'phone') { 
            setPhone(e.target.value)
        }
    }


    return (
        <>
            <p className='formText'>Completa tus datos y nos pondremos en contacto para coordinar el envío.</p>
            <form className="form">
                <input type="text" name="name" placeholder="Nombre" value={name} onChange={handleChangeValue}/>
                <input type="text" name="lastname" placeholder="Apellido" value={lastname} onChange={handleChangeValue}/>
                <input type="email" name="email" placeholder="E-mail" value={email} onChange={handleChangeValue} />
                <input type="number" name="phone" placeholder="Teléfono" value={phone} onChange={handleChangeValue} />
                <button onClick={()=>createOrder(name, lastname, email, phone)} className="sendOrder">Generar orden</button>                
            </form>
        </>
    )
}

export default Form