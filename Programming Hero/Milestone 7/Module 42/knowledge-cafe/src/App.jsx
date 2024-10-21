import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="max-w-screen-2xl m-auto mt-5">
      <Header />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
