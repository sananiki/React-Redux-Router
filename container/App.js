import React, { Component, PropTypes } from 'react'
import AddTodo from '../components/Addtodo'
import TodoList from '../components/Todolist'
import Footer from '../components/Footer'
import { connect } from 'react-redux' 
import $ from 'jquery'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'
//var datas = [
//{text: "This is one comment",atuh:"sananiki"},
//{text: "This is *another* comment",atuh:"gods"}
//];

 class App extends Component {
   /*loadCommentsFromServer=function() {
    $.ajax({
      url: url,
      dataType: 'text',
      cache: false,
      success: function(data) {
        console.log(data)
       // this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  }
    componentDidMount= function() {
    loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, pollInterval);
  }*/
  render() {
    // 通过调用 connect() 注入:
    const { dispatch, visibleTodos, visibilityFilter,url,pollInterval } = this.props
    //console.log("this.props")
    //console.log(this.props)
    

    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <AddTodo onAdd={text =>
          dispatch(addTodo(text))
        } />
        <TodoList
          todos={visibleTodos}
          changeTodoState={index =>
            dispatch(toggleTodo(index))
          }/>
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          } />
      </div>
    )
  }
}



function selectTodos(todos, filter) {
  switch (filter.filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETE:
      return todos.filter(todo => todo.isDone)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.isDone)
    case VisibilityFilters.SHOW_MONTH:
      return todos.filter(todo =>todo.text.date.substr(0,7)==filter.value)
  }
}
// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。
function select(state) {
  //console.log(state)
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中； select 是
export default connect(select)(App)


