import { combineReducers } from 'redux'
import ApiReducer from './reducer_api'

const rootReducer = combineReducers({
  result: ApiReducer
})

export default rootReducer
