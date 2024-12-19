import { useState } from "react";
import { ListaTareas } from "./ListaTareas";
export const TodoApp = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [listTasks, setListTasks] = useState<string[]>([]);
  const handleAddTasks = () => {
    if (newTask.trim() === "") return;
    setListTasks((tareasAnteriores) => [...tareasAnteriores, newTask]);
    setNewTask("");
  };
  const handleRemoveTask = (index: number) => {
    setListTasks((tareas) => tareas.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="nueva tareas"
        />
        <button onClick={handleAddTasks}>agregar Tarea</button>
      </div>
      <ListaTareas listaTareas={listTasks} borrarTareas={handleRemoveTask} />
    </div>
  );
};
