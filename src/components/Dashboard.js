import React, { useState } from 'react';
import { connect } from 'react-redux'
import FeatureCard from './FeatureCard'
import { TabContent, TabPane, Nav, NavItem, NavLink,  Row, Col } from 'reactstrap';
import classnames from 'classnames';



const Dashboard = (props) => {
  const [activeTab, setActiveTab] = useState('1');


  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className='container ans_unans'>
      <Nav tabs className="col-8 m-auto">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Answered
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            UnAnswered
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="col-8 m-auto">
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              {props.answered.map((answer) => (
                  <FeatureCard id={answer.id} key={answer.id}/>
              ))}
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              {props.unanswered.map((answer) => (
                  <FeatureCard id={answer.id} key={answer.id}/>
              ))}
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  )
;
}

function mapStateToProps ({ questions, authedUser }) {
  const answered = Object.values(questions).filter((question) =>  question['optionOne'].votes.includes(authedUser) || question['optionTwo'].votes.includes(authedUser));
  const unanswered = Object.values(questions).filter((question) =>  !(question['optionOne'].votes.includes(authedUser) || question['optionTwo'].votes.includes(authedUser)));

  return {
    answered: answered.sort((a,b) => b.timestamp - a.timestamp),
    unanswered: unanswered.sort((a,b) => b.timestamp - a.timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
