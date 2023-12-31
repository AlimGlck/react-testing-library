import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmojiResults from "../EmojiResults";
import filterEmoji from "../../../filterEmoji";

const filteredEmoji = filterEmoji("", 20);
const filteredEmojiX = filterEmoji("Bir", 20);

describe("EmojiResults", () => {
  it("should render the emoji list correctly", async () => {
    render(<EmojiResults emojiData={filteredEmoji} />);
    const emojiResultRows = await screen.findAllByTestId("emoji");

    expect(emojiResultRows.length).toBe(20);
  });

  it("should render the emoji list correctly", async () => {
    render(<EmojiResults emojiData={filteredEmojiX} />);
    const emojiResultRows = await screen.findAllByTestId("emoji");
    expect(emojiResultRows.length).toBe(2);
  });
});
