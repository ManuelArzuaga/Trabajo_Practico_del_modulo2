import Layout from "../Components/Layout/Layout"
import { useState } from "react"
import "../Styles/Registro.css"

function Registro(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  return(
    <Layout>
         <h1>Registro</h1>
      <form>
        <label htmlFor="email"><b>Correo Electronico:</b></label>
        <input name="email" id="email" type="email" onChange={(event)=>setEmail(event.target.value)}></input>
        <label htmlFor="password"><b>Contraseña:</b></label>
        <input name="password" id="password" type="password" onChange={(event)=>setPassword(event.target.value)}></input>
        <button type="submmit">Ingresar</button>
      </form>
    </Layout>
  )
}
export default Registro