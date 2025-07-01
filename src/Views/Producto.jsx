import Layout from "../Components/Layout/Layout"
import { useLocation } from "react-router-dom";
import "../Styles/Producto.css"

function Producto(){

  const location = useLocation()

  const producto = location.state
  
  return(
    <Layout>
      <div className="Contenedor">
        <h1>{producto.title}</h1>
        <img src={producto.image} alt={producto.title}></img>
        <p><b>Categoria:</b> {producto.category}</p>
        <p><b>Descripcion:</b> {producto.description}</p>
        <p><b>Precio:</b> {producto.price}$</p>
        <button>Comprar</button>
      </div>
    </Layout>
  )
}
export default Producto