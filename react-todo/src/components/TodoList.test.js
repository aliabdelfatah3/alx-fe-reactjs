import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";
import { waitFor } from "@testing-library/react";

describe("TodoList Component", () => {
  test("renders TodoList component with initial todos", () => {
    render(<TodoList />);
    // Check that initial todos are rendered
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn Jest/i)).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    // Simulate user typing a new todo and submitting the form
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "New Todo" },
    });
    fireEvent.click(screen.getByText(/Add Todo/i));
    // Check if the new todo is added to the list
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test("can toggle a todo between completed and not completed", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);
    // Initial state should not have a line-through style
    expect(todoItem).toHaveStyle("text-decoration: none");

    // Toggle the todo by clicking on it
    fireEvent.click(todoItem);

    // After toggling, the todo should have a line-through style
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Toggle it back
    fireEvent.click(todoItem);

    // After toggling back, the todo should revert to no line-through
    expect(todoItem).toHaveStyle("text-decoration: none");
  });
});

test("renders TodoList component", async () => {
  render(<TodoList />);
  await waitFor(() =>
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument()
  );
});
