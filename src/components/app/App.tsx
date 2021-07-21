import FormPage from "../main/formPage";
import Snippets from "../main/snippets";
import ScrollGallery from "../main/scrollGallery";
import Footer from "../footer/footer";

function App() {
  return (
    <div className="catch">
      <header>A front-end test of sorts</header>
      <main>
        <FormPage />
        <div className="catch-spacer">
          <hr />
        </div>
        <Snippets />
        <ScrollGallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
