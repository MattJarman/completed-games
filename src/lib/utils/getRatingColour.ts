export const getRatingColour = (rating: number) => {
  if (rating >= 95) return '#0EA5E9'
  if (rating > 80 && rating < 95) return '#22C55E'
  if (rating > 75 && rating <= 80) return '#86EFAC'
  if (rating > 60 && rating <= 75) return '#FACC15'
  if (rating > 50 && rating <= 60) return '#EAB308'

  return '#EF4444'
}
