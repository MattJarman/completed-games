import { render, screen } from "@testing-library/react";
import Table, { TableCell, TableRow } from "@ui/table";

describe("Table", () => {
  it("renders the Table correctly", () => {
    const text = "test";
    render(
      <Table>
        <TableRow>
          <TableCell>{text}</TableCell>
        </TableRow>
      </Table>
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
