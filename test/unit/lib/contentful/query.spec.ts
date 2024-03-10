import { query } from "src/lib/contentful";
import { z } from "zod";

const mockedFetch = jest.fn();

jest.spyOn(console, "error").mockImplementation(() => undefined);

describe("Test query", () => {
  beforeAll(() => {
    window.fetch = mockedFetch;
  });

  it("fetches the correct url and returns the decoded response", async () => {
    const expected = {
      data: {
        testCollection: [],
      },
    };

    const schema = z.object({
      data: z.object({
        testCollection: z.array(z.any()),
      }),
    });

    mockedFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(expected),
    });

    const actual = await query(
      `query {
        testCollection {
          id
        }
      }`,
      schema
    );

    expect(actual).toEqual(expected);
  });

  it("throws an error if the does not match the provided schema", async () => {
    const schema = z.object({
      data: z.object({
        testCollection: z.array(z.any()),
      }),
    });

    mockedFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const actual = () =>
      query(
        `query {
        testCollection {
          id
        }
      }`,
        schema
      );

    await expect(actual).rejects.toThrow(/Invalid response from Contentful/);
  });
});
