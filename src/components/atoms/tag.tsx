import type { ReactNode } from 'react'

type TagProps = {
  className?: string
  children: ReactNode
}

const Tag: React.FC<TagProps> = ({ className, children }) => {
  return (
    <div
      className={`px-2 py-1 text-xs rounded-sm shadow-sm md:text-sm bg-sky-700/25 text-sky-400 ${className}`}>
      {children}
    </div>
  )
}

export default Tag
