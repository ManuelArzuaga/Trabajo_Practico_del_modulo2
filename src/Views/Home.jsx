import Layout from "../Components/Layout/Layout"
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

function Home() {

  const navigate = useNavigate();
  const [productos,setProductos] = useState([])
  const [error,setError] = useState(null)

  async function fetchData(){
    try{
      const respuesta = await fetch("https://fakestoreapi.com/products")
      const data = await respuesta.json()
      setProductos(data)
    } catch (error){
      setError("No pude traer los productos")
    }
  }

  useEffect(()=>
  {
    fetchData()
  },[])

  function irADetalles(producto){
    navigate("/Producto",{state: producto})
  }
  return (
    <Layout>
      {
        error && <p>{error}</p>
      }
      {
        productos.map((producto)=>{
          return(
            <div className="Contenedor-Producto">
              <h1>{producto.title}</h1>
              <img src={producto.image} alt={producto.title}></img>
              <button onClick={()=>irADetalles(producto)}>Detalles</button>
            </div>
          )
        })
      }
    </Layout>
  )
}

export default Home
