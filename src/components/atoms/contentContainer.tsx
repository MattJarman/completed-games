import type { ReactNode } from 'react'

type ContentContainerProps = {
  className?: string
  children: ReactNode
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  className,
  children
}) => {
  return (
    <div
      className={`p-2 mt-4 text-sm bg-black bg-opacity-25 rounded-sm shadow-md sm:p-6 md:text-base ${
        className || ''
      }`}>
      {children}
    </div>
  )
}

export default ContentContainer
