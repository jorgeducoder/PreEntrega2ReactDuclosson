import React,{useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [alimentos,setAlimentos] = useState([]);

    const {categoriaId} = useParams()
   
    useEffect(()=>{

        const fetchData = () => {
            return fetch("/data/saborescaseros.json")
            .then((response) => response.json())
            .then((data)=>{
                   
                if(categoriaId){
                    const filterProducts = data.filter(p=>p.categoria == categoriaId)
                    
                    setAlimentos(filterProducts)
 
                }else{
                      setAlimentos(data)
                     }
            })
            .catch((error)=>console.log(error))
        }

        fetchData()
    /*Hay que devolver la categoria para que se renderice el componente cada vez que se llama*/    
    },[categoriaId])

    return (
        <>
           {alimentos.length == 0
           ?
            <h1>Si demoro no cargo...</h1>
            :
            <ItemList alimentos={alimentos}/>}
        </>
    );
};

export default ItemListContainer;