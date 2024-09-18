import { useState } from "react";

export default function TodoList({
  items,
  onDeleteItem,
  editTask,
  editId,
  setEditId,
}) {
  const handleChecked = (id) => {};

  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mx-auto">
        {items.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onChecked={handleChecked}
            onDelete={onDeleteItem}
            editTask={editTask}
            isEditing={editId === item.id}
            setEditId={setEditId}
          />
        ))}
      </div>
    </div>
  );
}

function Todo({ item, onChecked, onDelete, editTask, isEditing, setEditId }) {
  const [newName, setNewName] = useState(item.task);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTask(item.id, newName);
  };

  return (
    <div className="border-hrColor border pb-2 px-2 w-full sm:w-72 font-titalium mt-5 shadow-lg rounded-md bg-bgColor">
      <div className="flex justify-between gap-3 items-center">
        {isEditing ? (
          <form onSubmit={handleEditSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="border-hrColor border rounded-md p-2 w-full text-hrColor bg-bgColor mt-2"
            />
            <button
              type="submit"
              className="bg-green-500 text-bgColor p-2 rounded-md mt-2"
            >
              Save
            </button>
          </form>
        ) : (
          <>
            <p className="mb-4 whitespace-nowrap text-lg sm:text-base mt-3">
              {item.task}
            </p>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => onChecked(item.id)}
              className="w-4 h-4 sm:w-3 sm:h-3 bg-bgColor border-2 border-hrColor rounded-sm accent-hrColor"
            />
          </>
        )}
      </div>
      {!isEditing && (
        <div className="flex gap-2 justify-between">
          <button
            className="bg-bgColor rounded-md border p-2 w-full sm:w-24 md:w-20 lg:w-16 border-hrColor text-xs sm:text-sm md:text-base h-10"
            onClick={() => setEditId(item.id)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white rounded-md p-2 w-full sm:w-24 md:w-20 lg:w-16 text-xs sm:text-sm md:text-base h-10"
            onClick={() => onDelete(item.id)}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
