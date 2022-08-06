import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({products}) => {

    const mapProduct = products.map(product=><Item {...product} key={product.id}/>)

    return(
        <div className='itemsContainer'>
            {mapProduct}
        </div>
    )
}

export default ItemList