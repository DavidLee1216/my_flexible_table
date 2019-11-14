import { combineReducers } from 'redux'
import newRound from './newRound'
import newUser from './newUser'
import items from './items'

export default combineReducers({
  newUser,
  newRound,
  items
})
