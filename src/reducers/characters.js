import { CHARACTERSLOADED, CHARACTERLOADED } from '../actions/characters';

const reducer = (state = {}, action) => {
    switch (action.type) {
      case CHARACTERSLOADED:
        return {
          ...state,
          data: action.data.data,
          characterData: undefined,
        }
      case CHARACTERLOADED:
        return {
          ...state,
          characterData: action.data.data,
        }
      default: return state;
    }
}

export default reducer;