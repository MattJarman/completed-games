import { classNames } from "src/lib/utils";

describe("Test classNames", () => {
  it("returns the joined classes", () => {
    const expected = "test test-2";
    const actual = classNames("test", true && "test-2");
    expect(actual).toEqual(expected);
  });
});
