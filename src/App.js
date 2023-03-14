import { Route, Routes } from "react-router-dom";
import "./index.css";
import Main from "./layouts/Main";
import Chats from "./pages/Chats/Chats";
import LigaDetalle from "./pages/Detalle-liga/LigaDetalle";
import Inicio from "./pages/Inicio/Inicio";
import Ligas from "./pages/Ligas/Ligas";
import Login from "./pages/Login/Login";
import NewPass from "./pages/NewPass/NewPass";
import Registro from "./pages/Registro/Registro";
import Reservas from "./pages/Reservas/Reservas";
import ResPass from "./pages/ResPass/ResPass";

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route path="registro" element={<Registro />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="nueva-contrasena" element={<NewPass />}></Route>
          <Route path="restablecer-contrasena" element={<ResPass />}></Route>
          <Route path="reservas" element={<Reservas />}></Route>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/chats" element={<Chats />}></Route>
          <Route path="/ligas" element={<Ligas />}></Route>
          <Route path="/ligas-detalle/:id" element={<LigaDetalle />}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
