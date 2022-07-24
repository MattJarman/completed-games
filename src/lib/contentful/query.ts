export type ContentfulGraphQLResponse<CollectionKey extends string, Item> = {
  data?: {
    [key in CollectionKey]?: {
      items?: Item[]
    }
  }
}

export type RichTextLinks<T> = {
  assets: {
    block: T[]
  }
}

export const query = async <T>(query: string): Promise<T> =>
  fetch(
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
