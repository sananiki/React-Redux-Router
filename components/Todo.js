import React, { Component, PropTypes } from 'react';
import {  Card, Col, Row ,Button } from 'antd';
export default class Todo extends Component {
  render() {
    return (
      <Row>
        <Col span="6" onClick={this.props.onClick} style={{
          textDecoration: this.props.isDone ? 'line-through' : 'none'
        }}>
          <Card  >{this.props.text.money}</Card>
        </Col>
        <Col span="6"  style={{
          textDecoration: this.props.isDone ? 'line-through' : 'none'
        }}>
          <Card  >{this.props.text.bz}</Card>
        </Col>
        <Col span="6" style={{
          textDecoration: this.props.isDone ? 'line-through' : 'none'
        }}>
          <Card >{this.props.text.date}</Card>
        </Col>
        <Col span="6" style={{
          textDecoration: this.props.isDone ? 'line-through' : 'none'
        }}>
          <Card   onClick={this.props.reMove} >删除</Card>
        </Col>
      </Row>
    )
  }
}
