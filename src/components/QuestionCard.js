import React from 'react';
import { Card,  CardBody,
    CardTitle, CardSubtitle, Button, Form, FormGroup, Input, Label } from 'reactstrap'


export default () => (
  <div className="col-12 col-md-4 m-2">
    <Card>
      <CardBody>
      <CardTitle>Ask your Question?</CardTitle>
      <CardSubtitle>Author</CardSubtitle>
      <Form>
            <FormGroup>
                <Label htmlFor="username">Option 1</Label>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Option 2</Label>
            </FormGroup>
            <Button type="submit" value="submit" color="primary">Login</Button>
        </Form>
      </CardBody>
    </Card>
  </div>
)
