import "./index.css";
import Header from "./component/header/header";
import Hero from "./component/hero/hero";
// import Article from "./component/article/Article";
import Section from "./component/section/Section";
import Footer from "./component/Footer/footer";
import LinkApi from "./component/linkApi/LinkApi";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <LinkApi/>

      {/* <Article/> */}
      <Section/>
      <Footer/>

    </div>
  );
}

export default App;
