import React, { Component, PropTypes } from 'react'
import AddTodo from '../components/Addtodo'
import TodoList from '../components/Todolist'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'
//var datas = [
//{text: "This is one comment",atuh:"sananiki"},
//{text: "This is *another* comment",atuh:"gods"}
//];

 class App extends Component {
  render() {
    // 通过调用 connect() 注入:
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    //console.log(visibleTodos)
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
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETE:
      return todos.filter(todo => todo.isDone)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.isDone)
  }
}
// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中； select 是
export default connect(select)(App)


