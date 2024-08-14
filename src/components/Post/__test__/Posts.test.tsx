import { render, screen } from "@testing-library/react";
import Post from "..";

describe("Renderize o post corretamente", () => {
  it("Deve Renderizar corretamente", () => {
    render(<Post children={undefined} imageUrl={""} />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });
});
