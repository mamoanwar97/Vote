import React, {Component} from 'react';
import { Media, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'

class QuestionCard extends Component{
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
    const op2_text = this.props.question['optionTwo'].text;
    const op1_votes = this.props.question['optionOne'].votes.length;
    const op2_votes = this.props.question['optionTwo'].votes.length;
    const precentage = 100 / (op2_votes+ op1_votes);

    return (
      <div className="col-12 mb-3">
         <Media>
           <Media left href="#"  className="col-5">
             <Media object  className="col-12" src={this.props.user['avatarURL']} alt="Avatar image" />
           </Media>
           <Media body className="col-7">
             <Media heading>
               {this.props.question['author']} Asks:
             </Media>
              {
                alreadyVoted?
                (
                  <div>
                    <Label className ={voted_for1? "bg-info p-2": ""}>{op1_text}: { op1_votes *precentage }%</Label>
                    <Label className ={voted_for2? "bg-info p-2": ""}>{op2_text}: { op2_votes * precentage }%</Label>
                    <div>{op1_votes+op2_votes} persons voted</div>
                  </div>
                )
                :
                (
                  <div>
                    <div>
                      <Label className="btn-success p-2" check> <Input type="radio" name={"options"+ this.props.id} />{' '}{op1_text}</Label>
                    </div>
                    <div>
                      <Label className="btn-warning p-2" check> <Input type="radio" name={"options"+ this.props.id}  />{' '}{op2_text}</Label>
                    </div>
                  </div>
                )
              }
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

export default connect(mapStateToProps)(QuestionCard)
