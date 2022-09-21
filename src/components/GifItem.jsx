export const GifItem = ({title,url}) =>{
//Con el uso del spread operator nos llegan todas las props y las desestructuramos directamente

return(
    <>
        <div className="card">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>    
    
    </>

)

}