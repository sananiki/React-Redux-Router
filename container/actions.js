
import Wilddog from 'wilddog/lib/wilddog-node'
/*
*  aciton类型
*
*/
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
let wilddog=new Wilddog('https://sananiki.wilddogio.com')
/**
 * 其他的常量
 * 
 */
export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETE : 'SHOW_COMPLETE',
    SHOW_ACTIVE : 'SHOW_ACTIVE',
    SHOW_MONTH : 'SHOW_MONTH'
}
/**
 * action创建函数
 */
export function addTodo(text){
    return (dispatch,getState)=>{

    wilddog.child('todos').push({
      "text": {
            "money": text.money,
            "date": text.date,
            "bz": text.bz
        },
      "isDone": false
    },(err)=>{
      if(err){dispatch({type:ADD_TODO_ERROR,payload:err})}
    });
  }
} //增加内容
export function toggleTodo(key){
    wilddog.child(`todos/${key}`).update({
    "isDone": true
});
} //点击后完成
export function setVisibilityFilter(filter){
    return {type : SET_VISIBILITY_FILTER,filter}
} //过滤

export function registerListeners() {
  return (dispatch, getState) => {

    wilddog.child('todos').on('child_removed', snapshot => {
      console.log("删除了"+snapshot.key())
      dispatch({
        type:REMOVED_TODO,
        payload: snapshot.key()
      })
    });
    wilddog.child('todos').on('child_changed', snapshot => dispatch({
      type: TOGGLE_TODO,
      payload: Object.assign({},snapshot.val(),{key:snapshot.key()})
    }));
    wilddog.child('todos').on('child_added', snapshot => dispatch({
      type: ADD_TODO,
      payload: Object.assign({},snapshot.val(),{key:snapshot.key()})
    }));


  };
}