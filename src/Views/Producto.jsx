import Layout from "../Components/Layout/Layout"
import { useLocation } from "react-router-dom";

function Producto(){

  const location = useLocation()

  const producto = location.state
  
  return(
    <Layout>
      <h1>{producto.title}</h1>
      <img src={producto.image} alt={producto.title}></img>
      <p>Categoria: {producto.category}</p>
      <p>Descripcion: {producto.description}</p>
      <p>Precio: {producto.price}</p>
      <button>Comprar</button>
    </Layout>
  )
}
export default Producto