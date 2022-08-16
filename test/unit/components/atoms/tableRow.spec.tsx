import { render, screen } from '@testing-library/react'
import TableRow from 'src/components/atoms/tableRow'

describe('TableRow', () => {
  it('renders the TableRow correctly', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td data-testid="text"></td>
          </TableRow>
        </tbody>
      </table>
    )

    const text = screen.getByTestId('text')

    expect(text).toBeInTheDocument()
  })
})
