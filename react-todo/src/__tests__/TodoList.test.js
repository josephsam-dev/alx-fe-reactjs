import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList component', () => {
  test('renders Todo List heading', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add todo'), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    fireEvent.click(screen.getAllByText('Toggle')[0]);
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
