import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListTodoLists from "./components/ListTodoLists";
import ToDoList from "./components/ToDoList";
import { list } from "postcss";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb; 
  padding: 1.5rem;
`;

function App() {
  const [todoLists, setTodoLists] = useState([]);
  const [selectedListIndex, setSelectedListIndex] = useState(null);

 useEffect(() => {
  const fetchListsAndItems = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/lists');
      const lists = await res.json();

      const listsWithItems = await Promise.all(
        lists.map(async (list) => {
          const resItems = await fetch(`http://localhost:3001/api/lists/${list.id}`);
          if (!resItems.ok) throw new Error(`Failed to fetch items for list ${list.id}`);

          const listWithItems = await resItems.json();
          return listWithItems;
        })
      );

      setTodoLists(listsWithItems);

      // اینجا safe هست که لاگ بزنیم چون listsWithItems تعریف شده
      console.log("Fetched Lists with IDs:");
      listsWithItems.forEach(list => console.log(list.id));

    } catch (error) {
      console.error("Error fetching lists and items:", error);
    }
  };

  fetchListsAndItems();
}, []);



  
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



const handleToggleCheck = (itemId, newCheckedState) => {
  const newLists = [...todoLists];
  const list = newLists[selectedListIndex];

  if (!list || !Array.isArray(list.items)) {
    console.warn("Invalid list or items");
    return;
  }

  const item = list.items.find((item) => item.id === itemId);

  if (!item) {
    console.warn("itemId not found:", itemId);
    return;
  }

  item.checked = newCheckedState;
  setTodoLists(newLists);
};

  const handleRemoveTodo = async (itemId) => {
  if (selectedListIndex === null) return;

  const listId = todoLists[selectedListIndex].id;

  try {
    const response = await fetch(
      `http://localhost:3001/api/lists/${listId}/items/${itemId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error("Failed to delete item");

   
    const updatedList = await response.json();

  
    setTodoLists((prevLists) =>
      prevLists.map((list) => (list.id === updatedList.id ? updatedList : list))
    );
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};

  
  const handleAddItemToList = async (listId, label) => {
    try {
      const response = await fetch(`http://localhost:3001/api/lists/${listId}/items/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label }),
      });

      if (!response.ok) throw new Error("Failed to add item");

      const updatedList = await response.json();

      setTodoLists((prevLists) =>
        prevLists.map((list) => (list.id === updatedList.id ? updatedList : list))
      );
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <AppContainer>
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
          onAddItem={handleAddItemToList} 
          goBack={handleGoBack}
        />
      )}
    </AppContainer>
  );
}

export default App;
