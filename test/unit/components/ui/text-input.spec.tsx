import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextInput, { TextInputProps } from "@ui/text-input";

describe("TextInput", () => {
  it("renders the input", async () => {
    const onChange = jest.fn();
    const inputText = "test";
    const user = userEvent.setup();
    const placeholder = "Search";

    const props: TextInputProps = {
      id: "search",
      name: "search",
      placeholder,
      Icon: () => <svg></svg>,
      onChange,
    };

    render(<TextInput {...props} />);

    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();

    await user.type(input, inputText);

    expect(onChange).toBeCalledTimes(inputText.length);
  });
});
