import React, { useState } from "react";
import { useParams } from "react-router-dom";

const FilterList = ({ list }) => {
  let params = useParams();
  const [authorList, setAuthorList] = useState(
    list.filter((item) => item.authorSlug === params.authorSlug)
  ); // state filter by authorSlug

  return (
    <div>
      <div className="title">{authorList[0].author}</div>
      {authorList.map((item, index) => {
        return (
          <div key={index} className="quote">
            {item.content}
          </div>
        );
      })}
    </div>
  );
};

export default FilterList;
