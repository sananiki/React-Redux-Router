import React, { Component, PropTypes } from 'react';
import { Table } from 'antd';
export default class Todo extends Component {
  render() {
    return (
      <p onClick={this.props.onClick} style={{
          textDecoration: this.props.isDone? 'line-through' : 'none'
        }}>
        {this.props.text}
      </p>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired
}