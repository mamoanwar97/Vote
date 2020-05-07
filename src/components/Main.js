import React, {Component} from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Loading from './Loading.js'
import Header from './Header'


class Main extends Component{

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }


  render(){

    return (
      <div>
        <Header />
        {this.props.loading === true?  <Loading />:<Dashboard />}
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(Main)
