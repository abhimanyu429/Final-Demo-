import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Logo } from "@/components/site/Logo";

describe("Logo", () => {
  it("renders an img element with a valid src", () => {
    const { container } = render(<Logo />);
    const image = container.querySelector("img");

    if (!image) {
      throw new Error("Logo image was not rendered");
    }

    expect(image).toHaveAttribute("src");
    expect(image.getAttribute("src")).toBeTruthy();
  });

  it("renders with the correct alt text", () => {
    const { container } = render(<Logo />);
    const image = container.querySelector("img");
    expect(image).toHaveAttribute("alt", "AL NASEEM");
  });
});
