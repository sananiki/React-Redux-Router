import React, { Component, PropTypes } from 'react';
import { Input, Button ,message  } from 'antd';
export default class AddTodo extends Component {
  render() {
    return (
      <div className="example-input">
        <Input placeholder="需要添加的内容" ref="sa"   />
        <Button type="primary" onClick={this.handleClick}>增加</Button>
      </div>
    )
  }
    handleClick = (e) => {
    const node = this.refs.sa.refs.input
    const text = node.value.trim()
    message.info('您增加的是: ' + text);
    this.props.onAdd(text)
    node.value = ''
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
}