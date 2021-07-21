import snippet1 from "../../images/snippets/john-towner-1.svg";
import snippet2 from "../../images/snippets/john-towner-2.svg";

export const articleData = [
  {
    id: "art_01",
    title: "Pink & Purple Sunset",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper.",
    url: "http://www.example.com",
    link: "Go to the sunset",
    img: snippet1,
  },
  {
    id: "art_02",
    title: "Sublime Trees",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet…",
    url: "http://www.example.com",
    link: "View some more",
    img: snippet2,
  },
];

function Snippets() {
  return (
    <section className="catch-snippets">
      {articleData &&
        articleData.length > 0 &&
        articleData.map((article) => {
          return (
            <article className="catch-article" key={article.id}>
              <div className="article__mask">
                <img src={article.img} alt={article.title} />
              </div>
              <div className="title">{article.title}</div>
              <div>{article.description}</div>
              <p>
                <a
                  className="link"
                  href={article.url}
                  title={article.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {article.link}
                </a>
              </p>
            </article>
          );
        })}
    </section>
  );
}

export default Snippets;
