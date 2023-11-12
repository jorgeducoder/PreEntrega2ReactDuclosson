import React, {useState} from 'react';

const ItemCount = ({initial,maxprod,onAdd}) => {


    const [count,setCount] = useState(initial)

    const increment = () => {
        if(count<maxprod){
            setCount(count+1)
        }
    }

    const decrement = () => {
        if(count>initial){
            setCount(count-1)
        }
    }
    return (
        <div>
            <button onClick={increment}> + </button>
            <span>{count}</span>
            <button onClick={decrement}> - </button>
            <button onClick={()=>{onAdd(count)}}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;