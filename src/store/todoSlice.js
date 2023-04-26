import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { active: [], completed: [],id:null },
  reducers: {
    setTodo(state,action){
      console.log(action.payload)
      console.log('working')
       state.active = action.payload.todo.active
       state.completed = action.payload.todo.completed
       state.id = action.payload.id
    },
    addTodo(state, action) {
      for (let i = 0; i < state.active.length; i++) {
        if (state.active[i].title === action.payload.title) {
          console.log("This task already in Active Todo");
          return;
        }
      }
      for (let i = 0; i < state.completed.length; i++) {
        if (state.completed[i].title === action.payload.title) {
          console.log("you Completed this task");
          return;
        }
      }
      state = state.active.push(action.payload);
    },
    deleteTodo(state, action) {
      let index = state.active.findIndex((i) => i.title == action.payload);
      if (index == -1) {
        index = state.completed.findIndex((i) => i.title == action.payload);
        state.completed.splice(index, 1);
      } else state.active.splice(index, 1);
    },
    editTodo(state, action) {
      let newTodo = action.payload.newTitle;
      let index = state.active.findIndex(
        (i) => i.title === action.payload.title
      );
      if (index != -1) state.active[index] = newTodo;
    },
    completeTodo(state, action) {
      let index = state.active.findIndex((i) => i.title == action.payload);
      for (let i = 0; i < state.completed.length; i++) {
        if (state.completed[i].title === action.payload) {
          console.log("not done");
          return;
        }
      }
      let comTodo = state.active[index];
      state.completed.push(comTodo);
      state = state.active.splice(index, 1);
      console.log(state);
    },
  },
});

export const { addTodo, deleteTodo,setTodo, editTodo, completeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
