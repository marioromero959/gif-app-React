import { GifItem } from "../components/GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const {images,isLoading} = useFetchGifs(category)//Este custom-hook nos devuelve los gifs

  return (
    <>
      <h1>{category}</h1>
      {
        isLoading && (<h2>Cargando...</h2> )
        //Si la primera es true, ejecuta la segunda, como ngIf en Angular
      }
      <div className="card-grid">
        {
            images.map((image) => (
            <GifItem 
                key={image.id}
                {...image}//de esta forma separamos y enviamos todas las props para utilizar directamente en el funComponent 
            />
            ))
        }
      </div>
    </>
  );
};
