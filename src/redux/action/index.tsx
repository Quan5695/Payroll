import * as actionType from "./actionType"

export const addTodo = (payload: any) => ({
  type: actionType.ADD_TODO,
  payload,
})

export const removeArticle = (payload: any) => ({
  type: 'REMOVE_ARTICLE',
  payload
})
