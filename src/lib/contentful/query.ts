import { z } from 'zod'

export const query = async <T extends z.ZodTypeAny>(
  query: string,
  schema: T
): Promise<z.infer<T>> => {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
      },
      body: JSON.stringify({ query })
    }
  ).then((response) => response.json())

  const result = schema.safeParse(response)
  if (!result.success) {
    console.error(JSON.stringify(result.error, null, 2))
    throw new Error('Invalid response from Contentful')
  }

  return result.data
}
