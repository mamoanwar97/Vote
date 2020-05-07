import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderCard from './LeaderCard'

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <h3 className='center'>Your Leaderboard</h3>
        <div className="row">
          <div className='dashboard-list col-7'>
            {this.props.users.map((user) => (
                <LeaderCard id={user.id} key={user.id}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users: Object.values(users)
  }
}

export default connect(mapStateToProps)(Dashboard)
