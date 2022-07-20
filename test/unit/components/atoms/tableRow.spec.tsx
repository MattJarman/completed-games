import { render, screen } from '@testing-library/react'
import TableRow from 'src/components/atoms/tableRow'

describe('TableRow', () => {
  it('renders the TableRow correctly', () => {
    render(
      <TableRow>
        <p data-testid="text"></p>
      </TableRow>
    )

    const text = screen.getByTestId('text')

    expect(text).toBeInTheDocument()
  })
})
