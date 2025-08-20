import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

const getToggleButton = (title) =>
  screen.queryByRole("button", { name: `toggle-${title}` });
const getDeleteButton = (title) =>
  screen.queryByRole("button", { name: `delete-${title}` });

describe("TodoList", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(
      screen.getByRole("list", { name: /todo-list/i })
    ).toBeInTheDocument();
    expect(getToggleButton("Learn React")).toBeInTheDocument();
    expect(getToggleButton("Wire up Tailwind")).toBeInTheDocument();
    expect(getToggleButton("Write tests")).toBeInTheDocument();

    const tailwindItem = getToggleButton("Wire up Tailwind");
    expect(tailwindItem).toHaveClass("line-through");
    expect(tailwindItem).toHaveAttribute("aria-pressed", "true");
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add a new todo/i);
    const addBtn = screen.getByRole("button", { name: /add/i });

    fireEvent.change(input, { target: { value: "Study Jest" } });
    fireEvent.click(addBtn);

    expect(getToggleButton("Study Jest")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("prevents adding empty or whitespace-only todos", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText(/add a new todo/i);
    const addBtn = screen.getByRole("button", { name: /add/i });

    const before = screen.getAllByRole("listitem").length;

    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(addBtn);

    const after = screen.getAllByRole("listitem").length;
    expect(after).toBe(before);
  });

  test("toggles a todo's completed state by clicking it", () => {
    render(<TodoList />);

    const item = getToggleButton("Learn React");
    expect(item).not.toHaveClass("line-through");
    expect(item).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(item);
    expect(item).toHaveClass("line-through");
    expect(item).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(item);
    expect(item).not.toHaveClass("line-through");
    expect(item).toHaveAttribute("aria-pressed", "false");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    expect(getToggleButton("Write tests")).toBeInTheDocument();

    const del = getDeleteButton("Write tests");
    fireEvent.click(del);

    expect(getToggleButton("Write tests")).not.toBeInTheDocument();
  });

  test("shows empty message after deleting all todos", () => {
    render(<TodoList />);

    const deleteButtons = screen.getAllByRole("button", { name: /delete-/i });
    deleteButtons.forEach((btn) => fireEvent.click(btn));

    expect(
      screen.queryByRole("list", { name: /todo-list/i })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("status", { name: /empty-message/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("status", { name: /empty-message/i })
    ).toHaveTextContent("No todos");
  });
});
