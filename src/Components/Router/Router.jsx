import Home from "../../Views/Home"
import Login from "../../Views/Login"
import Registro from "../../Views/Registro"
import NotFound from "../../Views/NotFound";
import Producto from "../../Views/Producto"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Registro" element={<Registro></Registro>}></Route>
        <Route path="/Producto" element={<Producto></Producto>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router