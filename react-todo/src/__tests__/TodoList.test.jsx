import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/first todo/i); // adjust to match your demo todos
  expect(todoItem).toBeInTheDocument();
});

test('can add a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add todo/i); // your input placeholder
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('can toggle a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText(/first todo/i);
  fireEvent.click(todo);
  expect(todo).toHaveClass('completed'); // depends on your completed class
});

test('can delete a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText(/first todo/i);
  fireEvent.click(screen.getByText(/delete/i)); // your delete button
  expect(todo).not.toBeInTheDocument();
});
