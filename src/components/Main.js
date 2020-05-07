import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import QuestionCard from './QuestionCard'
import LoginCard from './LoginCard'
import Loading from './Loading.js'
import Header from './Header'
import LoadingBar from 'react-redux-loading'


class Main extends Component{

  componentDidMount(){
      this.props.dispatch(handleInitialData())
  }

  render(){

    const QuestionID = ({match, loading}) => {
          const id = match.params.question_id.substr(1);
          return loading === true?  <Loading />:<QuestionCard id={id} />
    };

    return (
      <div>
        <Header />
        <LoadingBar />
          {
            this.props.authedUser?
            (
              <Switch>
                    <Route exact path='/home' component={(props)=> this.props.loading === true?  <Loading />:<Dashboard />} />
                    <Route exact path='/add' component={({history, loading})=> this.props.loading === true?  <Loading />:<NewQuestion history={history} />}/>
                    <Route path='/question/:question_id' component={QuestionID}/>
                    <Route exact path='/leaderboard' component={(props)=> this.props.loading === true?  <Loading />:<Leaderboard />}/>
                    <Route exact path='/login' component={({history})=> <LoginCard history={history} />}/>
                    <Redirect to="/home" />
              </Switch>
            ):
            (
              <Switch>
                    <Route exact path='/login' component={({history})=> <LoginCard history={history} />}/>
                    <Redirect to="/login" />
              </Switch>
            )

          }

      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(Main)
