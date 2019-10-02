const uuidv1 = require('uuid/v1')

const initialState = [
  {
    coordinate: '60.1699 24.9384',
    id: 1
  }
]

export const coordinateChange = (coordinate) => {
  return {
    type: 'SET_COORDINATE',
    data: {
      coordinate,
      id: uuidv1()
    }
  }
}

// for now we handle only one coordinate at a time
// TODO handle more coordinates at once

const coordinateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COORDINATE':
      return [action.data]
    default:
      return state
  }
}

export default coordinateReducer