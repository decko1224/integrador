import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import Nav from "./components/Nav/Nav"
import { Routes, Route} from 'react-router-dom';
import About from "./components/About/About";
import Detail from './components/Detail/Detail';


function App() {
  const [characters, setcharacters] = useState([])

  const onSearch = (id) => {
    console.log("id:", id)
   fetch(`https://rickandmortyapi.com/api/character/${id}`)
   .then((res)=>res.json())
   .then((data)=>{
   (data.name ? characters.filter((char)=> char.id === data.id).length === 0:"") ? setcharacters([...characters, data]):
    alert("Ya existe")
   })
   .catch((error)=>console.log(error))
  };
  const onClose = (id)=> {
    const filtred = characters.filter((char)=>char.id !== id)
    setcharacters(filtred || [])
  }
  
  return (
    <div
    className='App'
    style={{
      padding: "25px"
    }}
    > 
    <Nav onSearch={onSearch}/>
    <Routes> 
      <Route 
          path="/home" element={
          <Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About/>}/>
          <Route path="/detail/:detailId" element={<Detail/>}
/>          
</Routes>
    </div>
  )
}


export default App



