import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {

    const mapProduct = products.map(product=><Item key={product.id} name={product.name} author={product.author} price={product.price} imageURL={product.picture} altImage={product.alt}/>)

    return(
        <div className='itemsContainer'>
            {mapProduct}
        </div>
    )
}

export default ItemList