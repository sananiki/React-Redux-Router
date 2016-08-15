import React, { Component, PropTypes } from 'react'
import Todo from './Todo'
import { Card } from 'antd';
export default class TodoList extends Component {
  render() {
    return (
      <Card >
         {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                onClick={() => this.props.changeTodoState(index)} />
        )}
      </Card>
    )
  }
}