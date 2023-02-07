import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const listSlice = createSlice({
  name: 'todosHandler',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, { title: String(action.payload), id: state.todos.length }];
    },
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodos } = listSlice.actions;

export default listSlice.reducer;
