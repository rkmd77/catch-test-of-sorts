import { render, screen } from "@testing-library/react";
import Footer from "../footer";

describe("Footer component test", () => {
  test("renders Footer", () => {
    render(<Footer />);

    const facebookIcon = screen.getByRole("img", {
      name: /facebook/i,
    });
    expect(facebookIcon.closest("a")).toHaveAttribute(
      "href",
      "https://www.facebook.com/"
    );
    const instagramIcon = screen.getByRole("img", {
      name: /instagram/i,
    });
    expect(instagramIcon.closest("a")).toHaveAttribute(
      "href",
      "https://www.instagram.com/"
    );
    const youtubeIcon = screen.getByRole("img", {
      name: /youtube/i,
    });
    expect(youtubeIcon.closest("a")).toHaveAttribute(
      "href",
      "https://www.youtube.com/"
    );

    expect(document.querySelector(".social-and-info")).toBeInTheDocument();
    expect(document.querySelector(".social_info")).toBeInTheDocument();
    expect(document.querySelector(".address-details")).toBeInTheDocument();
    expect(document.querySelector(".contact-details")).toBeInTheDocument();

    const emailElement = screen.getByRole("link", {
      name: /myname@gmail\.com/i,
    });
    expect(emailElement.closest("a")).toHaveAttribute(
      "href",
      "mailto:myname@gmail.com"
    );
  });
});
