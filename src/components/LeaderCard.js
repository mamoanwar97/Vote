import React, {Component} from 'react';
import { Media } from 'reactstrap'
import { connect } from 'react-redux'

class LeaderCard extends Component{
  vote = (e, option) => {
    e.preventDefault();
  }
  render(){
    if (!this.props.user) {
      return <div>No such Card</div>
    }

    const answered = Object.keys(this.props.user['answers']).length;
    const questions = this.props.user['questions'].length;

    return (
      <div className="col-12 mb-3">
         <Media>
           <Media left href="#"  className="col-5">
             <Media object  className="col-12" src={this.props.user['avatarURL']} alt="Avatar image" />
           </Media>
           <Media body className="col-7">
             <Media heading>
               {this.props.user.id}
             </Media >
             <div>Asked: {questions}</div>
             <div>Answered: {answered}</div>
              <div>Your score: {answered + questions}</div>
           </Media>
         </Media>
      </div>
    );
  }
}

function mapStateToProps ({users}, { id }) {
  const user = users[id]? users[id] : null;
  console.log(user);
  return {
    user
  };
}

export default connect(mapStateToProps)(LeaderCard)
