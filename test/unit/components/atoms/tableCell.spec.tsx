import { render, screen } from '@testing-library/react'
import TableCell from 'src/components/atoms/tableCell'

describe('TableCell', () => {
  it('renders the TableCell correctly', () => {
    render(
      <TableCell>
        <p data-testid="text"></p>
      </TableCell>
    )

    const text = screen.getByTestId('text')

    expect(text).toBeInTheDocument()
  })
})
