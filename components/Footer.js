import React, { Component, PropTypes } from 'react'
import { Tag, DatePicker } from 'antd';
import Format from '../include/date'  //自定义时间用法
const MonthPicker = DatePicker.MonthPicker;
export default class Footer extends Component {

  rendFilter(filter, name) {
    if (filter.filter === this.props.filter.filter) {
      <Tag color="blue">{name}</Tag>
    }
    return (
      <Tag color="blue" onClick={e => {
        e.preventDefault()
        this.props.onFilterChange(filter)
      } }>{name}</Tag>  //没使用箭头函数导致出错，查了很久的原因。。。
    )
  }


  handleChange(date) {
    let s_m={
      filter:'SHOW_MONTH',
      value : date.Format('yyyy-MM')
    }
    this.props.onFilterChange(s_m);
    //console.log('month')
  }
  /*render() {
    return (
      <div className="tag">
        {this.rendFilter('SHOW_ALL', '全部') }
        {this.rendFilter('SHOW_COMPLETE', '已确认') }
        {this.rendFilter('SHOW_ACTIVE', '未确认') }
        <MonthPicker defaultValue={new Date() } format="yyyy-MM-dd" style={{ margin: 20 }} onChange={value => this.handleChange(value) }/>
      </div>
    )
  }*/
  render() {
    return (
      <div className="tag">
        {this.rendFilter({filter:'SHOW_ALL',value:''}, '全部') }
        {this.rendFilter({filter:'SHOW_COMPLETE',value:''}, '已确认') }
        {this.rendFilter({filter:'SHOW_ACTIVE',value:''}, '未确认') }
        <MonthPicker defaultValue={new Date() } format="yyyy-MM-dd" style={{ margin: 20 }} onChange={value => this.handleChange(value) }/>
      </div>
    )
  }

}

