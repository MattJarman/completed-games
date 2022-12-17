import { FC, PropsWithChildren } from 'react'

const Title: FC<PropsWithChildren> = ({ children }) => (
  <p
    data-testid="title"
    className="text-2xl font-bold tracking-wide text-gray-200 truncate md:text-4xl">
    {children}
  </p>
)

export default Title
