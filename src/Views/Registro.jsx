import Layout from "../Components/Layout/Layout"
import { useState } from "react"

function Registro(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  return(
    <Layout>
         <h1>Registro</h1>
      <form>
        <label htmlFor="email">Correo Electronico:</label>
        <input name="email" id="email" type="email" onChange={(event)=>setEmail(event.target.value)}></input>
        <label htmlFor="password">Contraseña:</label>
        <input name="password" id="password" type="password" onChange={(event)=>setPassword(event.target.value)}></input>
        <button>Ingresar</button>
      </form>
    </Layout>
  )
}
export default Registro