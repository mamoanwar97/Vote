import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderCard from './LeaderCard'

class Dashboard extends Component {
  render() {
    return (
      <div className='container ans_unans'>
        <div className="row">
          <div className='dashboard-list col-7 m-auto'>
            <h3 className='m-3'>Your Leaderboard</h3>
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
