import type { ReactNode } from 'react'

type TagProps = {
  className?: string
  children: ReactNode
}

const Tag: React.FC<TagProps> = ({ className, children }) => {
  return (
    <div
      className={`px-2 py-1 text-xs bg-opacity-25 rounded-sm shadow-sm md:text-sm bg-sky-700 text-sky-400 ${
        className || ''
      }`}>
      {children}
    </div>
  )
}

export default Tag
