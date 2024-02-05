import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Item } from "../todo/components/item";

const mockTodo = {
  id: 1,
  title: "Test Todo",
  completed: false,
};

const mockDispatch = jest.fn();

describe("Item Component", () => {
  it("renders todo item with default values", () => {
    render(<Item todo={mockTodo} dispatch={mockDispatch} index={0} />);
    const todoItem = screen.getByTestId("todo-item");

    expect(todoItem).toBeInTheDocument();
    expect(screen.getByTestId("todo-item-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("todo-item-label")).toHaveTextContent("Test Todo");
    expect(screen.getByTestId("todo-item-button")).toBeInTheDocument();
  });

  it("toggles completion when checkbox is clicked", () => {
    render(<Item todo={mockTodo} dispatch={mockDispatch} index={0} />);
    const checkbox = screen.getByTestId("todo-item-toggle");

    fireEvent.click(checkbox);

    expect(mockDispatch).toHaveBeenCalledWith({ type: "TOGGLE_ITEM", payload: { id: 1 } });
  });

  it("removes todo when delete button is clicked", () => {
    render(<Item todo={mockTodo} dispatch={mockDispatch} index={0} />);
    const deleteButton = screen.getByTestId("todo-item-button");

    fireEvent.click(deleteButton);

    expect(mockDispatch).toHaveBeenCalledWith({ type: "REMOVE_ITEM", payload: { id: 1 } });
  });

  it("toggles edit mode when label is double-clicked", () => {
    render(<Item todo={mockTodo} dispatch={mockDispatch} index={0} />);
    const label = screen.getByTestId("todo-item-label");

    fireEvent.doubleClick(label);

    expect(screen.getByLabelText("Edit Todo Input")).toBeInTheDocument();
  });




});
