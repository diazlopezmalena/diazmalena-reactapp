import './ItemDetail.css'

const ItemDetail = ({ id, picture, alt, category, name, author, price, description }) => {

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
                <button className='bttnAddCart'>Añadir al carrito</button>
            </div>
        </article>
    )
}

export default ItemDetail