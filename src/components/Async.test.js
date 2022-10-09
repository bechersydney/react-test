import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async test", () => {
    test("renders post if req success", async () => {
        //using mock to fake the request
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: "p1", title: "First post" }],
        });
        render(<Async />);
        const liElement = await screen.findAllByRole(
            "listitem",
            {},
            { timeout: 3000 }
        );
        expect(liElement).not.toHaveLength(0);
    });
});
