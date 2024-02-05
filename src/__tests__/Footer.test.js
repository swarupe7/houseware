import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Footer } from "../todo/components/footer";

const mockDispatch = jest.fn();

const mockTodos = [
  { id: 1, title: "Todo 1", completed: false },
  { id: 2, title: "Todo 2", completed: true },
];

describe("Footer Component", () => {
  it("renders footer component with correct counts", () => {
    render(<Footer todos={mockTodos} dispatch={mockDispatch} />, { wrapper: MemoryRouter });
    const footerComponent = screen.getByTestId("footer");
    expect(footerComponent).toBeInTheDocument();
    expect(screen.getByTestId("footer-navigation")).toBeInTheDocument();
    expect(screen.getByText("1 item left!")).toBeInTheDocument();
    expect(screen.getByText("All")).toHaveClass("selected");
  });


  it("clears completed todos when button is clicked", () => {
    render(<Footer todos={mockTodos} dispatch={mockDispatch} />, { wrapper: MemoryRouter });
    const clearCompletedButton = screen.getByText("Clear completed");

    fireEvent.click(clearCompletedButton);

    expect(mockDispatch).toHaveBeenCalledWith({ type: "REMOVE_COMPLETED_ITEMS" });
  });


  it("does not render when there are no todos", () => {
    render(
    <MemoryRouter>
    <Footer todos={[]} dispatch={mockDispatch} />
    </MemoryRouter>);
    const footerComponent = screen.queryByTestId("footer");

    expect(footerComponent).not.toBeInTheDocument();
  });
});
