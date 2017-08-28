import { CHARACTERSLOADED } from '../actions/characters';

const reducer = (state = {}, action) => {
    switch (action.type) {
      case CHARACTERSLOADED:
        console.log('passe ok');
        return {
          ...state,
          characters: action.characters,
        }
      default: return state;
    }
}

export default reducer;