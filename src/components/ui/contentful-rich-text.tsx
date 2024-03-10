import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES } from "@contentful/rich-text-types";
import ContentfulImage from "@ui/contentful-image";
import { cva, VariantProps } from "class-variance-authority";
import { FC } from "react";
import { GameRichTextLinks } from "src/schemas/game";

const richTextStyles = cva("flex flex-col space-y-2", {
  variants: {
    intent: {
      primary: "text-white",
    },
    textSize: {
      base: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    intent: "primary",
    textSize: "base",
  },
});

export type ContentfulRichTextProps = VariantProps<typeof richTextStyles> & {
  document: Document;
  links: GameRichTextLinks;
};

const renderOptions = (links: GameRichTextLinks): Options => {
  const assetMap = new Map();

  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = assetMap.get(node.data.target.sys.id);

        return (
          <div className="md:m-auto md:w-3/4">
            <ContentfulImage
              className="rounded-md"
              src={asset.url}
              alt={asset.title}
              layout="responsive"
              width={asset.width}
              height={asset.height}
            />
          </div>
        );
      },
      [BLOCKS.TABLE]: (_, children) => (
        <div className="relative overflow-x-auto rounded-sm shadow-md sm:rounded-md">
          <table className="w-full text-white table-fixed">
            <tbody>{children}</tbody>
          </table>
        </div>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (_, children) => (
        <th className="px-6 py-3 text-xs tracking-wider text-left text-white bg-sky-700 md:text-base">
          {children}
        </th>
      ),
      [BLOCKS.TABLE_ROW]: (_, children) => (
        <tr className="text-xs font-light odd:bg-gray-800 md:text-base">
          {children}
        </tr>
      ),
      [BLOCKS.TABLE_CELL]: (_, children) => (
        <td className="p-3 text-white md:px-6 md:py-4">{children}</td>
      ),
      [BLOCKS.HEADING_1]: (_, children) => (
        <h1 className="mb-2 text-3xl md:text-5xl">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (_, children) => (
        <h2 className="mb-2 text-2xl md:text-4xl">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_, children) => (
        <h3 className="mb-2 text-xl md:text-3xl">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (_, children) => (
        <h4 className="mb-2 text-lg md:text-2xl">{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (_, children) => (
        <h5 className="mb-2 text-base md:text-xl">{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (_, children) => (
        <h6 className="mb-2 text-sm md:text-lg">{children}</h6>
      ),
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <a
          className="text-sky-500 hover:text-sky-700"
          href={data.uri}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      [BLOCKS.UL_LIST]: (_, children) => (
        <ul className="ml-6 list-disc">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_, children) => (
        <ul className="ml-6 list-decimal">{children}</ul>
      ),
      [BLOCKS.QUOTE]: (_, children) => (
        <blockquote className="pr-8 border-l-[6px] border-black border-opacity-25">
          <div className="pl-4">{children}</div>
        </blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="border-1 border-sky-500" />,
    },
  };
};

const ContentfulRichText: FC<ContentfulRichTextProps> = ({
  document,
  links,
  ...props
}) => {
  const component = documentToReactComponents(document, renderOptions(links));

  return (
    <div data-testid="rich-text" className={richTextStyles(props)}>
      {component}
    </div>
  );
};

export default ContentfulRichText;
