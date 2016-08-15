import React, { Component, PropTypes } from 'react';
import {  Card, Col, Row  } from 'antd';
export default class Todo extends Component {
  render() {
    return (
      <Row>
        <Col span="8" onClick={this.props.onClick} style={{
          textDecoration: this.props.isDone ? 'line-through' : 'none'
        }}>
          <Card  bordered={false}>{this.props.text.money}</Card>
        </Col>
        <Col span="8">
          <Card  bordered={false}>{this.props.text.bz}</Card>
        </Col>
        <Col span="8">
          <Card  bordered={false}>{this.props.text.date}</Card>
        </Col>
      </Row>
    )
  }
}
