import React, {Component} from 'react';
import { Card,  CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Input } from 'reactstrap'
import { connect } from 'react-redux'

class QuestionCard extends Component{

  render(){
    return (
      <div className="col-12 col-md-5 m-auto container">
        <Card className="m-4">
          <CardBody>
          <CardTitle className='text-center'><h3>Add your new poll</h3></CardTitle>
          <CardSubtitle className='text-center m-4'>Author: {this.props.authedUser}</CardSubtitle>
          <Form>
                <FormGroup>
                    <Input type="text" name="optionOne" id="optionOne" placeholder="Enter first Option" />
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="optionTwo" id="optionTwo" placeholder="Enter Second Option" />
                </FormGroup>
                <Button type="submit" value="submit" color="primary" className='m-auto'>Submit</Button>
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
