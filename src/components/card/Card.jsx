import styles from "./Card.module.css";
import { Link } from "react-router-dom"

export default function Card({ id, name, species, image, gender, onClose }) {
   return (
      <div className={styles.Link}>
         <div className={styles.container}>
            <div className={styles.buttonContainer}>
               <button onClick={onClose} className={styles.button}>
                  X
               </button>
            </div>
            <Link to={`/detail/${id}`} >
               <div className={styles.imageContainer}>
                  <img src={image} alt="Not found" />
                  <h2 className={styles.name}>{name}</h2>
               </div>
               <div className={styles.propsContainer}>
                  <h2>{species}</h2>
                  <h2>{gender}</h2>
               </div>
            </Link>
         </div>
      </div>



   );
}
