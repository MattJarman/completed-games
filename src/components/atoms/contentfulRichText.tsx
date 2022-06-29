import {
  documentToReactComponents,
  Options
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types'
import styled from 'styled-components'

export type ContentfulRichTextProps = {
  document: Document
}

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background: #374151;
  }
`

const options: Options = {
  renderNode: {
    [BLOCKS.TABLE]: (node, children) => (
      <div className="relative overflow-x-auto bg-gray-800 rounded-md shadow-md sm:rounded-lg">
        <table className="w-full text-gray-500 table-fixed">
          <tbody>{children}</tbody>
        </table>
      </div>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th className="px-6 py-2 text-xs font-normal tracking-wider text-gray-400 uppercase md:text-sm">
        {children}
      </th>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => (
      <StyledTableRow className="text-xs font-light md:text-sm">
        {children}
      </StyledTableRow>
    ),
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="p-3 text-white md:p-6">{children}</td>
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
  document
}) => {
  const component = documentToReactComponents(document, options)

  return (
    <div className="flex flex-col space-y-2 text-gray-200">{component}</div>
  )
}

export default ContentfulRichText
