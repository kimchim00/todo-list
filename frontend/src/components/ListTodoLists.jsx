import React from "react";

const ListTodoLists = ({ todoLists, onSelectList, onCreateList }) => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">My To-Do Lists</h1>
      <button
        onClick={onCreateList}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        New List
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {todoLists.map((list, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded cursor-pointer hover:shadow-lg transition"
            onClick={() => onSelectList(index)}
          >
            <h2 className="text-lg font-semibold mb-2">{list.name}</h2>
            <p className="text-gray-500">{list.items.length} items</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTodoLists;
