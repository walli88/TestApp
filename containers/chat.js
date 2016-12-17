import { connect } from 'react-redux'
import { fetchApi } from '../actions'
import ChatView from '../components/ChatView'

const mapStateToProps = (state) => ({
  result: state.reducerApi
})

const mapDispatchToProps = (dispatch) => ({
  onFetch: (blah) => {
    dispatch(fetchApi(blah))
  }
})

const Chat = connect(mapStateToProps, mapDispatchToProps)(ChatView)
export default Chat
