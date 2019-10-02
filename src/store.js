import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import notificationReducer from './reducers/notificationReducer'
import coordinateReducer from './reducers/coordinateReducer'
//import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  coordinates: coordinateReducer,
  notification: notificationReducer
  //user: userReducer
})


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)))

//console.log('the store is: ',store)

export default store