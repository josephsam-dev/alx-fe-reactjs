import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders the TodoList component", () => {
  render(<TodoList />);
  const heading = screen.getByText(/todo/i); // make sure your component has "Todo" in text
  expect(heading).toBeInTheDocument();
});
