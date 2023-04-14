import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/favorites/favorites";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setcharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const userName = "dacc1224@gmail.com";
  const password = "contra1234";
  const onSearch = (id) => {
    
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        (
          data.name
            ? characters.filter((char) => char.id === data.id).length === 0
            : ""
        )
          ? setcharacters([...characters, data])
          : alert("Ya existe");
      })
      .catch((error) => console.log(error));
  };
  const onClose = (id) => {
    const filtred = characters.filter((char) => char.id !== id);
    setcharacters(filtred || []);
  };
  const login = (userData) => {
    // {userName : "dacc1224@gmail.com",
    // password: "contra1234"}
    // if(userData.userName === userName &&
    //   userData.password === password) {
    //   setAccess(true) ;
    //   navigate("/home")
    //   }else{
    //     alert("Datos incorrectos, por favor verifique")
    //   }
    setAccess(true) ;
    navigate("/home");
  };
  const logOut = () => {
    access && setAccess(false)
    navigate("/")
  }

  useEffect(()=>{
    !access && navigate("/")
  },[access])
  
  return (
    <div
      className="App"
      style={{
        padding: "25px",
      }}
    >
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
