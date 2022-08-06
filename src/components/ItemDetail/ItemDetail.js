import './ItemDetail.css'

const ItemDetail = ({ id, picture, alt, category, name, price, description }) => {

    return (
        <article key={id}>
            <div>
                <img src={picture} alt={alt} />
            </div>
            <div>
                <p>{category}</p>
                <h2>{name}</h2>
                <p>{price}</p>
                <p>{description}</p>
                <button>Agrear al carrito</button>
            </div>
        </article>
    )
}

export default ItemDetail