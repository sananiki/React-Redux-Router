import React, { Component, PropTypes } from 'react'
import { Tag } from 'antd';
export default class Footer extends Component {
 
  rendFilter(filter,name){
    if (filter === this.props.filter) {
       <Tag color="blue">{name}</Tag>
    }
    return(
       <Tag color="blue" onClick={e => {
        e.preventDefault()
        this.props.onFilterChange(filter)
      }}>{name}</Tag>  //没使用箭头函数导致出错，查了很久的原因。。。
    )
  }

  render() {
    return (
    <div className="tag">
      {this.rendFilter('SHOW_ALL','全部')}
      {this.rendFilter('SHOW_COMPLETE','已完成')}
      {this.rendFilter('SHOW_ACTIVE','未完成')}
    </div>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETE',
    'SHOW_ACTIVE'
  ]).isRequired
};