import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders TodoList heading", () => {
    render(<TodoList />);
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();
  });

  test("renders initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Write Tests/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add todo/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);

    const todo = screen.getByText(/Learn React/i);
    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const deleteButtons = screen.getAllByText(/delete/i);
    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
