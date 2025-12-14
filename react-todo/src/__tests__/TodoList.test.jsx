import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList'

describe('TodoList Component', () => {
  test('renders Todo List heading', () => {
    render(<TodoList />)

    expect(
      screen.getByText(/Todo List/i)
    ).toBeInTheDocument()
  })

  test('renders initial todos', () => {
    render(<TodoList />)

    expect(
      screen.getByText('Learn React')
    ).toBeInTheDocument()

    expect(
      screen.getByText('Write Tests')
    ).toBeInTheDocument()
  })

  test('adds a new todo', () => {
    render(<TodoList />)

    const input = screen.getByPlaceholderText('Add todo')
    const addButton = screen.getByText('Add')

    fireEvent.change(input, {
      target: { value: 'New Todo' },
    })

    fireEvent.click(addButton)

    expect(
      screen.getByText('New Todo')
    ).toBeInTheDocument()
  })

  test('toggles a todo', () => {
    render(<TodoList />)

    const todoText = screen.getByText('Learn React')
    const toggleButton = screen.getAllByText('Toggle')[0]

    // Before toggle
    expect(todoText).toHaveStyle('text-decoration: none')

    fireEvent.click(toggleButton)

    // After toggle
    expect(todoText).toHaveStyle('text-decoration: line-through')
  })

  test('deletes a todo', () => {
    render(<TodoList />)

    const deleteButton = screen.getAllByText('Delete')[0]

    fireEvent.click(deleteButton)

    expect(
      screen.queryByText('Learn React')
    ).not.toBeInTheDocument()
  })
})
