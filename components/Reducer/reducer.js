import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsType";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_FAVORITE:
      const filtered = state.myFavorites.filter((character)=>
      character.id !== payload)
      return{
        myFavorites:filtered
      };

    default:
      return { ...state };
  }
};
export default reducer;
