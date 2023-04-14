import { connect } from "react-redux";
import Card from "../card/Card";
import { Div } from "../assets/styledComponents";

function Favorites({ myFavorites }) {
  return (
    <Div>
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
