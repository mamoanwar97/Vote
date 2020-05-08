import React from "react"
import {Button, Card, CardBody, CardHeader, CardTitle} from 'reactstrap';

const NotFound = ({ history }) => (
  <Card>
    <CardHeader>404</CardHeader>
    <CardBody>
      <CardTitle>Page Not Found</CardTitle>
      <Button size="small" color="primary" onClick={() => history.push("/home")}>
        Go Home
      </Button>
    </CardBody>
  </Card>
);

export default NotFound
