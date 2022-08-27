import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, author, price, picture, alt, stock, category, categoryTitle}) => {
    return (
        <article className='productCard' key={id}>
            <p className='productCardCategory'>{categoryTitle}</p>
            <div className='productCardImg'>
                <img src={picture} alt={alt} />
            </div>
            <div className='productCardDescription'>
                <h3>{name}</h3>
                <h4>{author}</h4>
                <p className='productCardDescriptionPrice'>${price}</p>
                <p className='productCardDescriptionStock'>Stock: {stock}</p>
                <Link to={`/detail/${id}`} className='seeDetail'>Ver detalle</Link>
            </div>
        </article>
    )
}

export default Item