import Item from '../Item/Item';

const ItemList = ({alimentos}) => {
    console.log(alimentos)
    return (
       <>
            {alimentos.map((alimento)=>(
                <Item
                key={alimento.id}
                alimento={alimento}/>
            ))}
       </>
    );
};

export default ItemList;