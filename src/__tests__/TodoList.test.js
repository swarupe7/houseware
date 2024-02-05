import React from "react";
import { render, fireEvent, screen,act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Main } from "../todo/components/main";
import { MemoryRouter } from "react-router-dom";

const mockDispatch = jest.fn();

const mockTodos = [
  { id: 1, title: "Todo 1", completed: false },
  { id: 2, title: "Todo 2", completed: true },
];

describe("Main Component", () => {
  it("renders main component with visible todos", () => {
    render(
        <MemoryRouter>
    <Main todos={mockTodos} dispatch={mockDispatch} />
    </MemoryRouter>
    );
    const mainComponent = screen.getByTestId("main");

    expect(mainComponent).toBeInTheDocument();
    expect(screen.getByTestId("todo-list")).toBeInTheDocument();
  });

  it("renders toggle all checkbox when there are visible todos", () => {
    render(
        <MemoryRouter>
    <Main todos={mockTodos} dispatch={mockDispatch} />
    </MemoryRouter>);
    const toggleAllCheckbox = screen.getByTestId("toggle-all");

    expect(toggleAllCheckbox).toBeInTheDocument();
  });



describe("Main Component", () => {
    it("toggles all todos when toggle all checkbox is clicked", () => {
      act(() => {
        render(
            <MemoryRouter>
                <Main todos={mockTodos} dispatch={mockDispatch} />
                </MemoryRouter>);
      });
      const toggleAllCheckbox = screen.getByTestId("toggle-all");
  
      fireEvent.click(toggleAllCheckbox);
  
      expect(mockDispatch).toHaveBeenCalledWith({ type: "TOGGLE_ALL", payload: { completed: true } });
    });
  });



  
  

  it("renders correctly when there are no visible todos", () => {
    render(
        <MemoryRouter>
    <Main todos={[]} dispatch={mockDispatch} />
    </MemoryRouter>);
    const mainComponent = screen.getByTestId("main");

    expect(mainComponent).toBeInTheDocument();
    expect(screen.queryByTestId("todo-item-label")).not.toBeInTheDocument();
  });
});
