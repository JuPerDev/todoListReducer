export const TaskList = ({ taskList, removeTask }) => (
  <ul className='mt-10'>
    {taskList.map((e, index) => {
      return (
        <li key={index} className='flex mb-3 justify-between'>
          <span>{e}</span>
          <button
            className='ml-5 p-2 text-slate-50 bg-red-600 rounded-2xl'
            onClick={() => removeTask(e)}
          >
            Borrar
          </button>
        </li>
      );
    })}
  </ul>
);
