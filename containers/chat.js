import { connect } from 'react-redux'


const mapStateToProps = ({ result }) {
  return { result } // weather: weather
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(fetchApi, dispatch)
}
