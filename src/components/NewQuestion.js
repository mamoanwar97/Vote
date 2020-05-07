import React, {Component} from 'react';
import { Card,  CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Input } from 'reactstrap'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/shared'

class QuestionCard extends Component{
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChangeOption1 = (e) => {
    const optionOne = e.target.value;

    this.setState(() => ({
      optionOne
    }))
  }
  handleChangeOption2 = (e) => {
    const optionTwo = e.target.value;

    this.setState(() => ({
      optionTwo
    }))
  }

  handleSubmit= (e)=>{
    e.preventDefault();
    this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo));
    this.setState(() => ({
      optionTwo: '',
      optionOne: ''
    }));
    this.props.history.push('/');

  }

  render(){
    return (
      <div className="col-12 col-md-5 m-auto container">
        <Card className="m-4">
          <CardBody>
          <CardTitle className='text-center'><h3>Add your new poll</h3></CardTitle>
          <CardSubtitle className='text-center m-4'>Author: {this.props.authedUser}</CardSubtitle>
          <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Input type="text" name="optionOne" id="optionOne" placeholder="Enter first Option" onChange={this.handleChangeOption1}/>
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="optionTwo" id="optionTwo" placeholder="Enter Second Option" onChange={this.handleChangeOption2} />
                </FormGroup>
                <Button type="submit" value="submit" color="primary" className='m-auto' disabled={!(this.state.optionTwo && this.state.optionOne)}>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

function mapStateToProps ({authedUser}) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(QuestionCard)
