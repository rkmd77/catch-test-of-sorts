import { render, screen } from "@testing-library/react";
import ScrollGallery from "../scrollGallery";
import { galleryData } from "../scrollGallery";

describe("ScrollGallery component test", () => {
  test("renders ScrollGallery", () => {
    render(<ScrollGallery />);

    galleryData.forEach((gallery, index) => {
      const imgElement = screen.getByRole("img", {
        name: gallery.id,
      });
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute("src", `john-towner-${index + 3}.svg`);
    });
  });
});
