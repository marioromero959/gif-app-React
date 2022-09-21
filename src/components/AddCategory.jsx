//Lo que esta comentado es la carga con el setCategory

// import { useState } from "react"

// export const AddCategory = ({setCategories}) => {
 
// const [inputValue,setInputValue] = useState('One Punch'); 
//  const onInputChange = (event) => {
//     setInputValue(event.target.value);
//  }
//  const onSubmit = (event) => {
//     event.preventDefault();
//     if(inputValue.trim().length < 1) return;//Si inserta un solo caracter sale de la funcion
//     setCategories(categories => [inputValue,...categories])//el callback de la funcion set tiene como parametro la prop actual, la cual estamos actualizando
//     // setInputValue(event.target.value);
//     setInputValue('');//Una vez que agregamos el caracter, vaciamos el input
//  }

// return(
//     <form onSubmit={onSubmit}> 
//         <input 
//         type="text" 
//         placeholder="Buscar gifs"
//         value={inputValue}
//         onChange={(event)=>onInputChange(event)}
//         />
//     </form>
//  )   
// }

//Uso del onNewCategory

import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
 
const [inputValue,setInputValue] = useState('One Punch'); 
 const onInputChange = (event) => {
    setInputValue(event.target.value);
 }

 const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length < 1) return;//Si inserta un solo caracter sale de la funcion
    setInputValue('');//Una vez que agregamos el caracter, vaciamos el input
    onNewCategory(inputValue.trim())
 }

return(
    <form onSubmit={onSubmit}> 
        <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event)=>onInputChange(event)}
        />
    </form>
 )   
}