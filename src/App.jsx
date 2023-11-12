import { useState,useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from "./components/NavBar/Navbar"
/*import ItemCount from './components/ItemCount/itemCount'*/
/*import Card from './components/Card/Card'*/
/*import colorFondo from './components/colorFondo/colorFondo'*/
import Button from './components/Button/Button'
/*import RenderProp from './components/RenderProp/RenderProp'*/
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
/*const BotonAmarillo = colorFondo(Button,"yellow")
const BotonAzul = colorFondo(Button,"blue")*/
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Mensaje from './components/Mensaje/Mensaje'
import Tartas from './components/Tartas/Tartas'

function App() {

 /* const greeting = "Sabor casero"*/

  return (
    <>
      <BrowserRouter>
      
      <NavBar />
      <Routes>
         <Route path='/' element={<ItemListContainer/>}/>
         <Route path='/ItemListContainer' element={<ItemListContainer/>}/>
         <Route path='/itemListcontainer/:categoriaId' element={<ItemListContainer/>}/>
         <Route path='Tartas' element={<Tartas/>}/>
         <Route path='/item/:alimentoId' element={<ItemDetailContainer/>}/>
         <Route path='/Mensaje' element={<Mensaje/>}/>

         {/* Lo que tenia antes <ItemListContainer/> 
         <ItemDetailContainer alimentoId={2}/>*/}

      </Routes>
      
      </BrowserRouter>
    
    </>
  )
}

export default App


  


