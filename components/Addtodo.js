import React, { Component, PropTypes } from 'react';
import { Form,Input,InputNumber, Button ,message,DatePicker  } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

export default class AddTodo extends Component {
  render() {

    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
    };

    return (
            <Form horizontal >
        <FormItem
          {...formItemLayout}
          label="金额"        
        >
          <Input placeholder="金额"  ref="sa"/>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="日期"
        >
           <DatePicker defaultValue={new Date()} format="yyyy-MM-dd"  onChange={value => this.handleChange(value)}/>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="备注"
        >
          <Input placeholder="备注用途" ref="bz"
          />
        </FormItem>

        

        <FormItem wrapperCol={{ span: 12, offset: 7 }}>
          <Button type="primary" onClick={this.handleClick}>确定</Button>
          &nbsp;&nbsp;&nbsp;
        </FormItem>
      </Form>
    )
  }  
    handleChange(date) {
    this.date_time=date.toString();
    console.log(this.date_time)

  }
   
    handleClick = (e) => {
    const sa_node = this.refs.sa.refs.input
    //console.log(sa_node)
    const sa_value = sa_node.value.trim()
    const bz_node = this.refs.bz.refs.input
    const bz_value = bz_node.value.trim()
   // const date_time_value = this.refs.date_time.refs.input.value.trim()

    var text = {
      money:sa_value,
      date:this.date_time,
      bz:bz_value
    }
    console.log(text)
    //message.info('您增加的是: ' + text);
    //this.props.onAdd(text)
    sa_node.value = ''
  }
}
AddTodo = Form.create()(AddTodo);
