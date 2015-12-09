'use strict';

/**
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const UN_COMPLETE_TODO = 'UN_COMPLETE_TODO';

/**
 * 筛选
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
 * action创建函数
 */

export function addTodo (text) {
  return {
    text,
    type: ADD_TODO
  };
}

export function completeTodo (index) {
  return {
    index,
    type: COMPLETE_TODO
  };
}

export function setVisibilityFilter (filter) {
  return {
    filter,
    type: SET_VISIBILITY_FILTER
  };
}

export function unCompleteTodo (index) {
  return {
    index,
    type: UN_COMPLETE_TODO
  }
}
