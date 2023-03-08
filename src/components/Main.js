import React from "react";
import { Link } from "react-router-dom";

const Main = ({ quote }) => {
  return (
    <div className="main">
      <div style={{ minHeight: 180 }}>
        <div className="quote">{quote.content}</div>
      </div>

      <Link to={`/${quote.authorSlug}`}>
        <div className="info">
          <div className="author">{quote.author}</div>
          <div className="tag">{quote.tags.join(", ")}</div>
        </div>
        <div>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </Link>
    </div>
  );
};

export default Main;
