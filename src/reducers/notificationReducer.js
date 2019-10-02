const initialState = ''

export const notificationChange = (message, type) => {
  return {
    type: 'SET_NOTIFICATION',
    data: {
      message,
      type
    }
  }
}

export const setNotification = (message, type = 'success', timeToShow = 3) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data:
      {
        message,
        type
      }
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: ''
      })
    }, timeToShow * 1000)
  }
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return [action.data]
    default:
      return state
  }
}

export default notificationReducer