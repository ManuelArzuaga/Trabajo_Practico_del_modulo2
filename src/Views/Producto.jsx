import Layout from "../Components/Layout/Layout"
import { useLocation } from "react-router-dom";

function Producto(){

  const location = useLocation();
  
  return(
    <Layout>
      <h1>{location.state.Titulo}</h1>
    </Layout>
  )
}
export default Producto