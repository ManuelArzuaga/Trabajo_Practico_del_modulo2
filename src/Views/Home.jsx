import Layout from "../Components/Layout/Layout"
import { useNavigate } from "react-router-dom";

function Home() {


  const productos = [
    {
      Titulo:"Producto1",
      Precio:1000,
      Descripcion:"Producto1"
    },
    {
      Titulo:"Producto2",
      Precio:1000,
      Descripcion:"Producto2"
    },
    {
      Titulo:"Producto3",
      Precio:1000,
      Descripcion:"Producto3"
    },
    {
      Titulo:"Producto4",
      Precio:1000,
      Descripcion:"Producto4"
    },
    
  ]

  const navigate = useNavigate();

  function irADetalles(producto){
    navigate("/Producto",{state: producto})
  }
  return (
    <Layout>
      {
        productos.map((producto)=>{
          return(
            <div className="Contenedor-Producto">
              <h1>{producto.Titulo}</h1>
              <p>{producto.Precio}</p>
              <p>{producto.Descripcion}</p>
              <button onClick={()=>irADetalles(producto)}>Comprar</button>
            </div>
          )
        })
      }
    </Layout>
  )
}

export default Home
