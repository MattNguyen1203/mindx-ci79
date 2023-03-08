import "./App.css";
import Main from "./components/Main";
import FilterList from "./components/FilterList";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]); //state lưu kết quả từ API
  const [quote, setQuote] = useState({
    author: "",
    content: "",
    tags: [],
    authorSlug: "",
  });
  //Call API
  useEffect(() => {
    fetch("https://api.quotable.io/quotes")
      .then((res) => res.json())
      .then((res) => {
        setList(res.results);
        setQuote(
          res.results[Math.floor(Math.random() * (res.results.length - 1))]
        );
      });
  }, []);
  // Event Click to change state quote
  const handleChangeRandom = () => {
    setQuote(list[Math.floor(Math.abs(Math.random() * (list.length - 1)))]);
  };

  return (
    <div className="container">
      <Link to="/">
        <div className="btn-random" onClick={handleChangeRandom}>
          random
          <i className="fa-solid fa-repeat"></i>
        </div>
      </Link>
      <Routes>
        <Route path="/" element={<Main quote={quote} />} />
        <Route path="/:authorSlug" element={<FilterList list={list} />} />
      </Routes>
    </div>
  );
}

export default App;
