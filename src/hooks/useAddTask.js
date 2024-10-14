import { useState, useReducer } from "react";

//Reducer
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const trimmedValue = action.payload.trim();
      if (trimmedValue === "") return state;
      if (state.includes(trimmedValue)) {
        alert("La tarea ya existe en la lista");
        return state;
      }
      return [...state, action.payload];
    case "REMOVE_TASK":
      return state.filter((e) => e !== action.payload);
    default:
      return state;
  }
};

export const useAddTask = () => {
  const [taskList, dispatch] = useReducer(taskReducer, []); //Inicializamos con un array vacio

  const addTask = (event, inputValue) => {
    event.preventDefault();
    dispatch({ type: "ADD_TASK", payload: inputValue });
  };

  const removeTask = (task) => {
    dispatch({ type: "REMOVE_TASK", payload: task });
  };

  return {
    taskList,
    addTask,
    removeTask,
  };
};
