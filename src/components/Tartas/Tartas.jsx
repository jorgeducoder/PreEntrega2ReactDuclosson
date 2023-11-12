import React,{useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';

const Tartas = () => {
    
    const [alimentos,setAlimentos] = useState([]);
    
    useEffect(()=>{

        const fetchData = () => {
            return fetch("/data/saborescaseros.json")
            .then((response) => response.json())
            .then((data)=>{
                const filterProducts = data.filter(p=>p.categoria == 'Tartas')
                    
                
                alert(filterProducts)
                
                setAlimentos(filterProducts) 
            })
            .catch((error)=>console.log(error))
        }

        fetchData()

    },[])      
                

    return (
        <>
           {alimentos.length == 0
           ?
            <h1>No encontro nada si demoro en cargar...</h1>
            :
            <ItemList alimentos={alimentos}/>}
        </>
    );
};

export default Tartas;