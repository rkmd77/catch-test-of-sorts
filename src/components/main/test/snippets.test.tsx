import { render, screen } from "@testing-library/react";
import Snippets from "../snippets";
import { articleData } from "../snippets";
import userEvent from "@testing-library/user-event";

describe("Snippets component test", () => {
  test("renders Snippets", () => {
    render(<Snippets />);

    articleData.forEach((article) => {
      const imgElement = screen.getByRole("img", {
        name: article.title,
      });
      expect(imgElement).toBeInTheDocument();
      expect(screen.getByText(article.description)).toBeInTheDocument();
      expect(screen.getByText(article.link)).toBeInTheDocument();
      userEvent.hover(imgElement);
      expect(screen.getByAltText(article.title)).toBeInTheDocument();
    });
  });
  test("link onCLick event", () => {
    render(<Snippets />);

    articleData.forEach((article) => {
      const linkElement = screen.getByText(article.link) as HTMLElement;
      expect(linkElement.closest("a")).toHaveAttribute("href", article.url);
    });
  });
});
