type TitleProps = {
  className?: string
  title: string
}

const Title: React.FC<TitleProps> = ({ className, title }) => (
  <p
    data-testid="title"
    className={`text-2xl font-bold tracking-wide text-gray-200 truncate md:text-4xl ${
      className || ''
    }`}>
    {title}
  </p>
)

export default Title
