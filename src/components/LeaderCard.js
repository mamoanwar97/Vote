import React, {Component} from 'react';
import { Media } from 'reactstrap'
import { connect } from 'react-redux'

class LeaderCard extends Component{
  vote = (e, option) => {
    e.preventDefault();
  }
  render(){
    if (!this.props.question) {
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
               {this.props.question['author']}
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

function mapStateToProps ({authedUser, users, questions}, { id }) {
  const question = questions[id];
  const user = question? users[question['author']] : null;
  return {
    authedUser,
    question: question? question : null,
    user
  };
}

export default connect(mapStateToProps)(LeaderCard)
