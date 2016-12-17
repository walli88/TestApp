import { FETCH_API } from '../actions/index'

const reducerApi = (state = "BLANK", action) => {
  switch (action.type) {
    case "FETCH_API":
      return action.payload
    default:
      return state
  }

}

export default reducerApi
