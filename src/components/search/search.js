import React, {Component} from 'react';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button,Checkbox} from 'react-bootstrap';
import './search.css'

export default class Search extends Component{
  render() {
    return (
      <Grid className="search">
        <Row className="show-grid">
          <Col xs = {12}>
            <h2>{this.props.sectionTitle}</h2>
          </Col>
        </Row>

        <Form className="formContainer" horizontal>

          <FormGroup controlId="formValidationNull" validationState={null}>
            <ControlLabel>Topic</ControlLabel>
            <FormControl type="text" placeholder="Topic"/>
          </FormGroup>

          <FormGroup controlId="formValidationNull" validationState={null}>
            <ControlLabel>Start Year</ControlLabel>
            <FormControl type="text" placeholder="Start Year"/>
          </FormGroup>

          <FormGroup controlId="formValidationNull" validationState={null}>
            <ControlLabel>End Year</ControlLabel>
            <FormControl type="text" placeholder="End Year"/>
          </FormGroup>

          <FormGroup>
            <Col smOffset={4} sm={6}>
              <Button type="submit">
                Search
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Grid>
    )
  }
}
