import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const NewListButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #3b82f6; 
  color: white;
  border-radius: 0.375rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2563eb; 
  }
`;

const ListsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ListCard = styled.div`
  background-color: white;
  box-shadow: 0 4px 6px rgb(0 0 0 / 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 12px rgb(0 0 0 / 0.15);
  }
`;

const ListName = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ListItemsCount = styled.p`
  color: #6b7280; 
`;

const ListTodoLists = ({ todoLists = [], onSelectList, onCreateList }) => {
  if (!Array.isArray(todoLists) || todoLists.length === 0) {
    return (
      <Container>
        <Title>My To-Do Lists</Title>
        <NewListButton onClick={onCreateList}>New List</NewListButton>
        <p>No lists found.</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>My To-Do Lists</Title>
      <NewListButton onClick={onCreateList}>New List</NewListButton>

      <ListsGrid>
        {todoLists.map((list, index) => (
          <ListCard key={index} onClick={() => onSelectList(index)}>
            <ListName>{list.name}</ListName>
            <ListItemsCount>{list.items?.length ?? 0} items</ListItemsCount>
          </ListCard>
        ))}
      </ListsGrid>
    </Container>
  );
};


export default ListTodoLists;
