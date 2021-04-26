import * as React from "react";
import { render, screen } from "@testing-library/react";

describe("<App />", () => {
    test("jest setup test", () => {
        expect(1 + 2).toBe(3);
    });
    test("Testing Library setup test", () => {
        render(<div>test</div>);
        expect(screen.getByText(/test/i)).toBeInTheDocument();
    });
});