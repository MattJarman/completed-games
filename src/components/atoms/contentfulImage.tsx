import type { NextPage } from 'next'
import Image, { ImageLoader, ImageProps } from 'next/image'

const loader: ImageLoader = ({ src, width, quality }): string =>
  `${src}?w=${width}&q=${quality || 75}`

const ContentfulImage: NextPage<ImageProps> = (props) => (
  <Image loader={loader} alt={props.alt} {...props} />
)

export default ContentfulImage
