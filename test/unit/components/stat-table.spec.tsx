import { render, screen } from '@testing-library/react'
import StatTable from 'src/components/stat-table'

describe('StatTable', () => {
  it('renders the table correctly', () => {
    render(
      <StatTable
        completedAt="2022-07-05T12:00:00.000Z"
        playtime={12}
        difficulty="Hard"
        completionStats="100%, All Achievements"
      />
    )

    const date = screen.getByText(/Tue Jul 05 2022/i)
    const playtime = screen.getByText(/12 hrs/i)
    const difficulty = screen.getByText(/Hard/i)
    const completionStats = screen.getByText(/100%, All Achievements/i)

    expect(date).toBeInTheDocument()
    expect(playtime).toBeInTheDocument()
    expect(difficulty).toBeInTheDocument()
    expect(completionStats).toBeInTheDocument()
  })

  it('defaults optional props', () => {
    render(<StatTable completedAt="2021-05-30T00:00:00.000+01:00" />)

    const playtime = screen.getByText(/0 hrs/i)
    const questionDefaults = screen.getAllByText('?')

    expect(playtime).toBeInTheDocument()
    expect(questionDefaults.length).toEqual(2)
  })
})
