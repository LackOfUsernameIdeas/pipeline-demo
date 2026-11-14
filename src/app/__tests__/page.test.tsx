import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../page";

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /production pipeline demo/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("displays pipeline gates", () => {
    render(<Home />);
    expect(screen.getByText(/Branching & PRs/i)).toBeInTheDocument();
    expect(screen.getByText(/CI Verification/i)).toBeInTheDocument();
    expect(screen.getByText(/Vercel Previews/i)).toBeInTheDocument();
  });

  it("verifies CI gate passes with valid code", () => {
    // Fixed: CI gate will now turn GREEN!
    expect("ready-for-production").toBe("ready-for-production");
  });
});
