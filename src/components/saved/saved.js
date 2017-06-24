import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './saved.css'

export default class Saved extends Component{
  render() {
    return (
      <Grid className="saved">
        <Row className="show-grid">
          <Col xs = {12}>
            <h2>{this.props.sectionTitle}</h2>
          </Col>
        </Row>

        <Row className="show-grid">
          {this.props.children}
        </Row>
      </Grid>
    )
  }
}
