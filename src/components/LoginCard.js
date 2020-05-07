import React, {Component} from 'react';
import { Card,  CardBody,
    CardTitle, Button, Form, FormGroup, Input } from 'reactstrap'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/auth'

class LoginCard extends Component{

  handleSubmit= (e)=>{
    e.preventDefault();
    this.props.dispatch(setAuthedUser(e.target.select.value));
    this.props.history.push('/');

  }

  render(){
    return (
      <div className="col-12 col-md-5 m-auto container">
        <Card className="m-4">
          <CardBody>
          <CardTitle className='text-center'><h3>Choose Your avatar</h3></CardTitle>
          <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                <Input type="select" name="select" id="exampleSelect">
                  <option value="sarahedo">Sarah Edo</option>
                  <option value="tylermcginnis">Tyler McGinnis</option>
                  <option value="johndoe">John Doe</option>
                 </Input>
                </FormGroup>
                <Button type="submit" value="submit" color="primary" className='m-auto'>Login</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default connect()(LoginCard)
