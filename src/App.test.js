import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  let copyEmoji;

  it("should copy the emoji", () => {
    render(<App />);
    copyEmoji = screen.getByText("100");
    fireEvent.click(copyEmoji);
    expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch(
      "💯"
    );
  });
});
