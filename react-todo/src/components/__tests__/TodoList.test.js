import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList"; // relative to __tests__ folder

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/todo 1/i)).toBeInTheDocument();
});
