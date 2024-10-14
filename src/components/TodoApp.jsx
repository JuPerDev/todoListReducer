import { useForm } from "../hooks/useForm";
import { TaskList } from "./TaskList";
import { useAddTask } from "../hooks/useAddTask";
import { useEffect } from "react";

export const TodoApp = () => {
  const { inputValue, handleInputValue, setInputValue } = useForm();
  const { taskList, addTask, removeTask } = useAddTask(inputValue);
  useEffect(() => {
    setInputValue("");
  }, [taskList]);
  return (
    <>
      <h3 className='text-rose-500 text-7xl'>Todo List</h3>
      <form
        onSubmit={(event) => addTask(event, inputValue)}
        className='mt-10 flex gap-4'
      >
        <input
          type='text'
          className='border-none ring-1 ring-inset ring-rose-500 focus:ring-rose-400 focus:ring-2 transition-all duration-300 block focus:outline-none p-2 rounded-xl'
          placeholder='Escribe aquí tu tarea'
          value={inputValue}
          onChange={handleInputValue}
          required
        />
        <button className='rounded-xl bg-rose-500 p-2 text-slate-50'>
          Agregar Tarea
        </button>
      </form>
      <TaskList taskList={taskList} removeTask={removeTask} />
    </>
  );
};
