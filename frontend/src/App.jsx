import React, { useState } from "react";
import ListTodoLists from "./components/ListTodoLists";
import ToDoList from "./components/ToDoList";

function App() {
  const [todoLists, setTodoLists] = useState([]);
  const [selectedListIndex, setSelectedListIndex] = useState(null);

  const handleCreateList = () => {
    const newList = {
      name: `List ${todoLists.length + 1}`,
      items: [],
    };
    setTodoLists([...todoLists, newList]);
  };

  const handleSelectList = (index) => {
    setSelectedListIndex(index);
  };

  const handleGoBack = () => {
    setSelectedListIndex(null);
  };

  const handleToggleCheck = (itemIndex) => {
    const newLists = [...todoLists];
    const item = newLists[selectedListIndex].items[itemIndex];
    item.checked = !item.checked;
    setTodoLists(newLists);
  };

  const handleRemoveTodo = (itemIndex) => {
    const newLists = [...todoLists];
    newLists[selectedListIndex].items.splice(itemIndex, 1);
    setTodoLists(newLists);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {selectedListIndex === null ? (
        <ListTodoLists
          todoLists={todoLists}
          onSelectList={handleSelectList}
          onCreateList={handleCreateList}
        />
      ) : (
        <ToDoList
          todoList={todoLists[selectedListIndex]}
          onToggleCheck={handleToggleCheck}
          onRemoveTodo={handleRemoveTodo}
          goBack={handleGoBack}
        />
      )}
    </div>
  );
}

export default App;
