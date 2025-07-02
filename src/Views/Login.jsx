import Layout from "../Components/Layout/Layout"
import { useState } from "react"
import "../Styles/Login.css"

function Login(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(null)

  function handleSumbit(e){

    e.preventDefault()

    if((!email) || (!password)){
    setError("Debes completar los campos")
    return
    }
    else{
      setError(null)
    }
  }
  
  return(
    <Layout>
      <h1>Login</h1>
      <form onSubmit={handleSumbit}>
        <label htmlFor="email"><b>Correo Electronico:</b></label>
        <input name="email" id="email" type="email" onChange={(event)=>setEmail(event.target.value)}></input>
        <label htmlFor="password"><b>Contraseña:</b></label>
        <input name="password" id="password" type="password" onChange={(event)=>setPassword(event.target.value)}></input>
        <button type="submit">Ingresar</button>
        {error && <p>{error}</p>}
      </form>
    </Layout>
  )
}
export default Login