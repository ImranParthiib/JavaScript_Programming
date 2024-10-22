import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/main";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  return (
    <div className="max-w-screen-2xl m-auto mt-5 ">
      <Header />
      <Main addBookmark={addBookmark} bookmarks={bookmarks} />
      <Footer />
    </div>
  );
}

export default App;
