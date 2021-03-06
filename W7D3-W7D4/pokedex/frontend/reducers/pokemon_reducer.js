import merge from 'lodash/merge';
import {
  RECEIVE_ALL_POKEMON
} from '../actions/pokemon_actions';

export default (state, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    default:
      return nextState;
  }
};
