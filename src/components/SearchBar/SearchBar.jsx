import { useState } from 'react';
import style from './SearchBar.module.css';
export default function SearchBar(props) {
   //const {onSearch} = props;
   const [character, setCharacter] = useState('');
   
    const handleInputChange = (event) => {

       const {value} = event.target;
      console.log("que trae", value)

       setCharacter(value)
    }

   
   return (
      <div className={style.container}>
          <input type='search' onChange={handleInputChange}/>
      <button onClick={()=> props.onSearch(character)}>Agregar</button> 
      </div>
   );
}
