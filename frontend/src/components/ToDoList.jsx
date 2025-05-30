import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styled, { css } from "styled-components";

const Container = styled.div`
  padding: 1rem;
  margin: 1rem;
`;

const BackButton = styled.button`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #e5e7eb;
  border-radius: 0.375rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d1d5db;
  }
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  border: 1px solid #d1d5db;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 0.375rem;
`;

const AddButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.375rem;
  background-color: #f9fafb;
  cursor: pointer;

  ${(props) =>
    props.checked &&
    css`
      text-decoration: line-through;
      color: #9ca3af;
    `}
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const TodoText = styled.span`
  flex-grow: 1;
`;

const TrashIcon = styled(FaTrash)`
  color: #ef4444;
  margin-left: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #b91c1c;
  }
`;

const ToDoList = ({ todoList, onAddItem, onToggleCheck, onRemoveTodo, goBack }) => {
  const [newItemText, setNewItemText] = useState("");

  const handleAddItem = () => {
    if (!newItemText.trim()) return;
    onAddItem(todoList.id, newItemText.trim());
    setNewItemText("");
  };

  if (!todoList) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <BackButton onClick={goBack}>Back</BackButton>
      <Title>{todoList.name || "Untitled List"}</Title>

      <InputGroup>
        <Input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="New item"
        />
        <AddButton onClick={handleAddItem}>Add</AddButton>
      </InputGroup>

      {Array.isArray(todoList.items) && todoList.items.length > 0 ? (
        todoList.items.map((item) => (
          <TodoItem key={item.id} checked={item.checked}>
            <Checkbox
              type="checkbox"
              checked={item.checked}
              onChange={() => onToggleCheck(item.id, !item.checked)}
            />
            <TodoText>{item.label}</TodoText>
            <TrashIcon onClick={() => onRemoveTodo(item.id)} />
          </TodoItem>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </Container>
  );
};

export default ToDoList;
