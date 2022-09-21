import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const onAddCategory = (value) => {
    // setCategories(['Naruto',...categories])//Agrega al comienzo
    // setCategories([...categories,'Naruto'])//Agrega al final, hace la copia y agrega el nuevo elemento
    if (!categories.includes(value)) setCategories([value,...categories]); //
  };

  return (
    <>
      {/* titulo */}
      <h1>Gif ExpertApp</h1>
      {/* A los componentes se le pueden mandar props como valores o funciones */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* input */}
      {/* Listado de gifs */}
      {categories.map(
        (category) => (
          <GifGrid category={category} key={category} />
        )
        //Obligatoriamente cuando iteramos elementos basados en un map, tenemos que mandar una key unica
        //La key la tiene que tener el elemento que se itera
        //Esta forma es como poner un return con llaves, pero no hace falta
      )}
      {/* giifItems */}
    </>
  );
};
