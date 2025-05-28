import React from "react";
import { FaTrash } from "react-icons/fa";

const ToDoList = ({ todoList, onToggleCheck, onRemoveTodo, goBack }) => {
  if (!todoList) return <div className="p-4 text-center text-lg">Loading...</div>;

  return (
    <div className="p-4 space-y-4">
      <button
        className="mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={goBack}
      >
        Back
      </button>

      <div className="bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">{todoList.name}</h2>
        {todoList.items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center border p-4 m-4 cursor-pointer ${
              item.checked ? "line-through text-gray-400" : ""
            }`}
            onClick={() => onToggleCheck(index)}
          >
            <input
              type="checkbox"
              checked={item.checked}
              readOnly
              className="mr-2"
            />
            <span className="flex-grow">{item.name}</span>
            <FaTrash
              className="text-red-500 hover:text-red-700 ml-4 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onRemoveTodo(index);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
