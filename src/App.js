import Body from "./Component/Body/Body";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import "./App.css";

const App = () => {

  const soci = {
    twi: {
      title: "Twitter Link",
      id: "twitter",
      url: "https://twitter.com/hossanadev/"
  }
  }

  return (
    <>
      <div className="app">
          <Header />
          <Body twitter={soci.twi.title} twiURL={soci.twi.url}/>
          <Footer />
      </div>
    </>
  );
};

export default App;
