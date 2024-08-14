import { fireEvent, render, screen } from "@testing-library/react";
import Post from "..";

describe("Testar de Post", () => {
  it("Deve Adcionar Muito Legal", () => {
    render(<Post />);
    fireEvent.change(screen.getByTestId("conentarios"), {
      target: {
        value: "Muito Legal",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentario"));

    expect(screen.getByText("Muito Legal")).toBeInTheDocument();
  });
  it("Deve Adcionar Adorei..", () => {
    render(<Post />);
    fireEvent.change(screen.getByTestId("conentarios"), {
      target: {
        value: "Adorei...",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comentario"));
    expect(screen.getByText("Adorei...")).toBeInTheDocument();
  });
});
