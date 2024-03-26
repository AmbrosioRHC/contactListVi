import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import injectContext from "./store/appContext.jsx";
import Home from "./views/home";
import Add from "./views/add";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/add">- Add contact </Link>
        </nav>

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"add"} element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);
