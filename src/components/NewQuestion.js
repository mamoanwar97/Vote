import React, {Component} from 'react';
import { Card,  CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Input } from 'reactstrap'
import { connect } from 'react-redux'

class QuestionCard extends Component{

  render(){
    return (
      <div className="col-12 col-md-5 m-2">
        <Card>
          <CardBody>
          <CardTitle className='mr-auto'>Add your new poll</CardTitle>
          <CardSubtitle>Author: {this.props.authedUser}</CardSubtitle>
          <Form>
                <FormGroup>
                    <Input type="text" name="optionOne" id="optionOne" placeholder="Enter first Option" />
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="optionTwo" id="optionTwo" placeholder="Enter Second Option" />
                </FormGroup>
                <Button type="submit" value="submit" color="primary" className='m-auto'>Done</Button>
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
