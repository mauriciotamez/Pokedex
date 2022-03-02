const INITIAL_STATE = {
  name: '',
  pokemon: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      }

    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload
      }

    default:
      return state
  }
}

export default reducer
