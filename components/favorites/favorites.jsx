import { connect } from "react-redux";
import Card from "../card/Card";
import { Div } from "../assets/styledComponents";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../Reducer/actions";

function Favorites({ myFavorites }) {
  //const [aux, setAux] = useState(false)
  const dispatch = useDispatch();

  return (
    <Div>
      <div>
        <select name="order" onChange={(e) => {
            dispatch(orderCards(e.target.value));
            //setAux(!aux)}
        }}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          name="filter"
          onChange={(e) => {
            dispatch(filterCards(e.target.value));
          }}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknow">Unknow</option>
        </select>
      </div>
      {myFavorites?.map(({ id, name, species, image, gender }) => (
        <Card
          id={id}
          key={id}
          name={name}
          species={species}
          image={image}
          gender={gender}
        />
      ))}
    </Div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
export default connect(mapStateToProps, null)(Favorites);

//aqui te quedaste 12/04/23 21:50
