import React, {Component} from 'react';
import { Media } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class FeatureCard extends Component{
  vote = (e, option) => {
    e.preventDefault();
  }
  render(){
    if (!this.props.question) {
      return <div>No such Card</div>
    }

    const voted_for1 = this.props.question['optionOne'].votes.includes(this.props.authedUser);
    const voted_for2 = this.props.question['optionTwo'].votes.includes(this.props.authedUser);
    const alreadyVoted =  voted_for1 || voted_for2;
    const op1_text = this.props.question['optionOne'].text;
    const op1_votes = this.props.question['optionOne'].votes.length;
    const op2_votes = this.props.question['optionTwo'].votes.length;

    return (
      <div className="col-12 mb-3">
         <Media>
           <Media left href="#"  className="col-5">
             <Media object  className="col-12" src={this.props.user['avatarURL']} alt="Avatar image" />
           </Media>
           <Media body className="col-7">
             <Media heading>
               {this.props.question['author']} Asks: <br/> Would you rather?
             </Media >
              {
                alreadyVoted?
                (
                  <div>
                    <div>You and {op1_votes+op2_votes} persons voted</div>
                  </div>
                )
                :
                (
                  <div>
                    <div>.. {op1_text} ..</div>
                  </div>
                )
              }
              <Link to={`/home/:${this.props.id}`} className='btn-primary btn btn-lg p-2 view-link center'>View poll</Link>
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

export default connect(mapStateToProps)(FeatureCard)
