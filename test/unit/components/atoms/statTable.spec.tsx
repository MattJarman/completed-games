import { render, screen } from '@testing-library/react'
import StatTable from 'src/components/atoms/statTable'

describe('StatTable', () => {
  it('renders the table correctly', () => {
    const name = 'Test'
    const value = 'value'
    const row = {
      icon: <svg data-testid="icon"></svg>,
      name,
      value
    }

    render(<StatTable rows={[row]} />)

    const icon = screen.getByTestId('icon')
    const nameText = screen.getByText(name)
    const valueText = screen.getByText(value)

    expect(icon).toBeInTheDocument()
    expect(nameText).toBeInTheDocument()
    expect(valueText).toBeInTheDocument()
  })
})
