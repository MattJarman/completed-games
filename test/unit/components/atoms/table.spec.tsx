import { render, screen } from '@testing-library/react'
import Table from 'src/components/atoms/table'

describe('Table', () => {
  it('renders the Table correctly', () => {
    render(
      <Table>
        <tr data-testid="text"></tr>
      </Table>
    )

    const text = screen.getByTestId('text')

    expect(text).toBeInTheDocument()
  })
})
