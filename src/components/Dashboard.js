import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderCard from './LeaderCard'

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <h3 className='center'>Your Timeline</h3>
        <div className="row">
          <div className='dashboard-list col-6'>
            <h2>Answered Questions</h2>
            {this.props.answered.map((answer) => (
                <LeaderCard id={answer.id} key={answer.id}/>
            ))}
          </div>
          <div className='dashboard-list col-6'>
            <h2>Unanswered Questions</h2>
            {this.props.unanswered.map((answer) => (
                <LeaderCard id={answer.id} key={answer.id}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  const answered = Object.values(questions).filter((question) =>  question['optionOne'].votes.includes(authedUser) || question['optionTwo'].votes.includes(authedUser));
  const unanswered = Object.values(questions).filter((question) =>  !(question['optionOne'].votes.includes(authedUser) || question['optionTwo'].votes.includes(authedUser)));

  return {
    answered: answered.sort((a,b) => b.timestamp - a.timestamp),
    unanswered: unanswered.sort((a,b) => b.timestamp - a.timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
