
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({alimentodet}) => {

    const onAdd = (quantity) => {
        alert(quantity)
    }
    
    return (
        <div>
            <img src={alimentodet.img} alt={alimentodet.nombre} />
            <h2>{alimentodet.nombre}</h2>
            <p>Pedido máximo: {alimentodet.maxprod}</p>
            <p>Precio: {alimentodet.precio}</p>
            <p>Categoria: {alimentodet.categoria}</p>
            <p>Descripción: {alimentodet.descripcion}</p>
            <ItemCount initial={1} maxprod={alimentodet.maxprod} onAdd={onAdd}/>
        </div>
    );
};

export default ItemDetail;