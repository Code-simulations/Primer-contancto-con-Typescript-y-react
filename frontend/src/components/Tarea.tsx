type Tarea = {
  task: string;
  borrarTarea: () => void;
};

export const Tarea = ({ task, borrarTarea }: Tarea) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={borrarTarea}>borrar Tarea</button>
    </div>
  );
};
