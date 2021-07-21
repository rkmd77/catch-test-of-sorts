import snippet3 from "../../images/gallery/john-towner-3.svg";
import snippet4 from "../../images/gallery/john-towner-4.svg";
import snippet5 from "../../images/gallery/john-towner-5.svg";
import snippet6 from "../../images/gallery/john-towner-6.svg";

export const galleryData = [
  {
    id: "gallery_01",
    img: snippet3,
  },
  {
    id: "gallery_02",
    img: snippet4,
  },
  {
    id: "gallery_03",
    img: snippet5,
  },
  {
    id: "gallery_04",
    img: snippet6,
  },
];

function ScrollGallery() {
  return (
    <section className="catch-gallery">
      {galleryData &&
        galleryData.length > 0 &&
        galleryData.map((gallery) => {
          return (
            <div className="gallery__mask" key={gallery.id}>
              <img src={gallery.img} alt={gallery.id} />
            </div>
          );
        })}
    </section>
  );
}

export default ScrollGallery;
