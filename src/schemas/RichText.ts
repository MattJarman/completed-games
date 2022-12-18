import {
  Block,
  BLOCKS,
  Inline,
  INLINES,
  ListItemBlock,
  TopLevelBlock
} from '@contentful/rich-text-types'
import { z } from 'zod'

export const blocksSchema = z.nativeEnum(BLOCKS)

export const inlinesSchema = z.nativeEnum(INLINES)

export const topLevelBlockEnumSchema = z.union([
  z.literal(BLOCKS.PARAGRAPH),
  z.literal(BLOCKS.HEADING_1),
  z.literal(BLOCKS.HEADING_2),
  z.literal(BLOCKS.HEADING_3),
  z.literal(BLOCKS.HEADING_4),
  z.literal(BLOCKS.HEADING_5),
  z.literal(BLOCKS.HEADING_6),
  z.literal(BLOCKS.OL_LIST),
  z.literal(BLOCKS.UL_LIST),
  z.literal(BLOCKS.HR),
  z.literal(BLOCKS.QUOTE),
  z.literal(BLOCKS.EMBEDDED_ENTRY),
  z.literal(BLOCKS.EMBEDDED_ASSET),
  z.literal(BLOCKS.TABLE)
])

export const listItemBlockEnumSchema = z.union([
  z.literal(BLOCKS.PARAGRAPH),
  z.literal(BLOCKS.HEADING_1),
  z.literal(BLOCKS.HEADING_2),
  z.literal(BLOCKS.HEADING_3),
  z.literal(BLOCKS.HEADING_4),
  z.literal(BLOCKS.HEADING_5),
  z.literal(BLOCKS.HEADING_6),
  z.literal(BLOCKS.OL_LIST),
  z.literal(BLOCKS.UL_LIST),
  z.literal(BLOCKS.HR),
  z.literal(BLOCKS.QUOTE),
  z.literal(BLOCKS.EMBEDDED_ENTRY),
  z.literal(BLOCKS.EMBEDDED_ASSET)
])

export const nodeDataSchema = z.record(z.any())

export const markSchema = z.object({
  type: z.string()
})

export const nodeSchema = z.object({
  nodeType: z.string(),
  data: nodeDataSchema
})

export const textSchema = nodeSchema.extend({
  nodeType: z.literal('text'),
  value: z.string(),
  marks: z.array(markSchema)
})

export const inlineSchema: z.ZodSchema<Inline> = z.lazy(() =>
  nodeSchema.extend({
    nodeType: inlinesSchema,
    content: z.array(z.union([inlineSchema, textSchema]))
  })
)

export const blockSchema: z.ZodSchema<Block> = z.lazy(() =>
  nodeSchema.extend({
    nodeType: blocksSchema,
    content: z.array(z.union([blockSchema, inlineSchema, textSchema]))
  })
)

export const topLevelBlockSchema: z.ZodSchema<TopLevelBlock> = z.lazy(() =>
  nodeSchema.extend({
    nodeType: topLevelBlockEnumSchema,
    content: z.array(z.union([blockSchema, inlineSchema, textSchema]))
  })
)

export const documentSchema = nodeSchema.extend({
  nodeType: z.literal(BLOCKS.DOCUMENT),
  content: z.array(topLevelBlockSchema)
})

export const listItemBlockSchema: z.ZodSchema<ListItemBlock> = z.lazy(() =>
  nodeSchema.extend({
    nodeType: listItemBlockEnumSchema,
    content: z.array(z.union([blockSchema, inlineSchema, textSchema]))
  })
)
