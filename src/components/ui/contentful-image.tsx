import Image, { ImageLoader, ImageProps } from "next/image";

const loader: ImageLoader = ({ src, width, quality }): string =>
  `${src}?w=${width}&q=${quality || 75}&fm=jpg&fl=progressive`;

const ContentfulImage: React.FC<ImageProps> = (props) => (
  <Image loader={loader} {...props} alt={props.alt} />
);

export default ContentfulImage;
