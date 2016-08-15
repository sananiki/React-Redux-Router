/*
*  aciton类型
*
*/
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * 其他的常量
 * 
 */
export const VisibilityFilters = {
    SHOW_ALL : 'SHOW_ALL',
    SHOW_COMPLETE : 'SHOW_COMPLETE',
    SHOW_ACTIVE : 'SHOW_ACTIVE'
}
/**
 * action创建函数
 */
export function addTodo(text){
    return {type : ADD_TODO,text}
} //增加内容
export function toggleTodo(index){
    return {type : TOGGLE_TODO,index}
} //点击后完成
export function setVisibilityFilter(filter){
    return {type : SET_VISIBILITY_FILTER,filter}
} //过滤
