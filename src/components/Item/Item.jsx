import { Link } from 'react-router-dom';

const Item = ({alimento}) => {


    return (
        <>
        <div className='contenedor'>
            <Link to={`/item/${alimento.id}`}>
                <h1>{alimento.nombre}</h1>
            </Link>
                        
            <img src={alimento.img} alt={alimento.nombre} />
            <h1>{alimento.nombre}</h1>
        </div>  

        
        </>
        
    );
};

export default Item;