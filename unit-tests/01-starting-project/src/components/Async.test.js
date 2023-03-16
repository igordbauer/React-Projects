import Async from "./Async";
import { render, screen } from "@testing-library/react";

describe("Async component", () => {
  test("renders posts", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);

    const listItemElemnt = await screen.findAllByRole("listitem");
    expect(listItemElemnt).not.toHaveLength(0);
  });
});
