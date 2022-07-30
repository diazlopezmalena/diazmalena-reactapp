import './Item.css'

const Item = ({id, name, author, price, imageURL, altImage}) => {
    return (
        <article className='productCard' key={id}>
            <div className='productCardImg'>
                <img src={imageURL} alt={altImage} />
            </div>
            <div className='productCardDescription'>
                <h3>{name}</h3>
                <h4>{author}</h4>
                <p>${price}</p>
                <button>Ver detalles</button>
            </div>
        </article>
    )
}

export default Item