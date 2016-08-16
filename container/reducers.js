import { combineReducers } from 'redux' //合并两个reducers
import Format from '../include/date'  //自定义时间用法
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters, MONTH_FILTER } from './actions';
import $ from 'jquery'
const { SHOW_ALL } = VisibilityFilters

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            console.log(state)
            console.log("执行增加操作")
            $.ajax({
                url: "http://www.top-hill.cn/home/File/ajax",
                // dataType: 'json',
                type: 'POST',
                data: {
                    money: action.text.money,
                    date:action.text.date,
                    bz:action.text.bz,
                    isDone: false
                },
                success: function (data) {
                    console.log("success")
                    // this.setState({data: data});
                }
            });
            return [
                ...state,
                {
                    text: action.text,
                    isDone: false
                }
            ]   //添加功能

        case TOGGLE_TODO://标记完成的功能
            /* 写法一：
             return [
                 ...state.slice(0, action.index),  //取第一个到 index个
                 Object.assign({}, state[action.index], {
                     isDone: true
                 }),//index作处理
                 ...state.slice(action.index + 1)//index后面的
             ]
             */
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        isDone: !todo.isDone
                    })  //条件成立时的处理：箭头函数里的方法：es6语法的assign通过判断下标，更改当前是否完成的标识，
                }
                return todo  //下标不等于 index的时候，直接返回todo
            })
        default:
            $.ajax({
                url: "http://www.top-hill.cn/home/File/ajax",
                //dataType: 'json',
                async: false, // 同步
                success: function (data) {
                    state = data
                    // this.setState({data: data});
                }
            });
            return state

    }
}

function visibilityFilter(state = { filter: 'SHOW_MONTH', value: new Date().Format('yyyy-MM') }, action) {  //问题在这！
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            //console.log("过滤："+SET_VISIBILITY_FILTER)
            return action.filter
            console.log("过滤的是" + action.filter)
        default:
            return state
    }
} //过滤 完成 全部 未完成 三个选项


const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp