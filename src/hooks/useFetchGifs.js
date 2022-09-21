import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) =>{
    // Los hooks pueden usar otros hooks
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false)
  };

  // el useEffect no puede ser async
  useEffect(() => {
    getImages();
  }, []); //Unicamente ejecuta esta funcion al comienzo, cuando se renderiza el componente


    return {
        images,
        isLoading
    };

}