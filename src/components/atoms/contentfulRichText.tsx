import {
  documentToReactComponents,
  Options
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types'

export type ContentfulRichTextProps = {
  className?: string
  document: Document
}

const options: Options = {
  renderNode: {
    [BLOCKS.TABLE]: (node, children) => (
      <div className="relative overflow-x-auto rounded-sm shadow-md sm:rounded-md">
        <table className="w-full text-white table-fixed">
          <tbody>{children}</tbody>
        </table>
      </div>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th className="px-6 py-3 text-xs tracking-wider text-left text-white bg-sky-700 md:text-base">
        {children}
      </th>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => (
      <tr className="text-xs font-light odd:bg-gray-800 md:text-base">
        {children}
      </tr>
    ),
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="p-3 text-white md:px-6 md:py-4">{children}</td>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="mb-2 text-3xl md:text-5xl">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="mb-2 text-2xl md:text-4xl">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="mb-2 text-xl md:text-3xl">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="mb-2 text-lg md:text-2xl">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="mb-2 text-base md:text-xl">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="mb-2 text-sm md:text-lg">{children}</h6>
    ),
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a
        className="text-sky-500 hover:text-sky-700"
        href={data.uri}
        target="_blank"
        rel="noopener noreferrer">
        {children}
      </a>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="ml-6 list-disc">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ul className="ml-6 list-decimal">{children}</ul>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="pr-8 border-l-[6px] border-black border-opacity-25">
        <div className="pl-4">{children}</div>
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="border-1 border-sky-500" />
  }
}

const ContentfulRichText: React.FC<ContentfulRichTextProps> = ({
  className,
  document
}) => {
  const component = documentToReactComponents(document, options)

  return (
    <div className={`flex flex-col space-y-2 text-gray-200 ${className}`}>
      {component}
    </div>
  )
}

export default ContentfulRichText
