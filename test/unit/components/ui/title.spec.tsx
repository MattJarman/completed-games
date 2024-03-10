import { render, screen } from "@testing-library/react";
import Title from "@ui/title";

describe("Title", () => {
  it("renders the title correctly", () => {
    const title = "title";
    render(<Title>{title}</Title>);

    const text = screen.getByText(title);

    expect(text).toBeInTheDocument();
  });
});
