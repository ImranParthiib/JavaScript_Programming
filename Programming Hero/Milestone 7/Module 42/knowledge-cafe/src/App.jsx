import "./App.css";

import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Main from "./components/Main/main";

function App() {
  return (
    <div className="max-w-screen-2xl m-auto mt-5 ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
