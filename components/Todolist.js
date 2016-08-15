import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import {  Card, Col, Row, Alert } from 'antd';
export default class TodoList extends Component {
  render() {
    this.total = 0
    for (var i = 0; i < this.props.todos.length; i++) {
      this.total += parseFloat(this.props.todos[i].text.money)  //总金额
    }
    return (
      <div style={{ background: '#ECECEC', padding: '20px' }}>
        <Row>
          <Col span="8">
            <Card title="金额" bordered={false} bodyStyle={{ padding: 0 }}></Card>
          </Col>
          <Col span="8">
            <Card title="用途" bordered={false} bodyStyle={{ padding: 0 }}></Card>
          </Col>
          <Col span="8">
            <Card title="时间" bordered={false} bodyStyle={{ padding: 0 }}></Card>
          </Col>
        </Row>

        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
            key={index}
            onClick={() => this.props.changeTodoState(index) } />

        ) }

        <div><Alert message={"总金额：" + this.total} type="info" /></div>
      </div>
    )
  }
}