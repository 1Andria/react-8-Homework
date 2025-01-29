import "./Questions.css";
import EachQuestion from "../../__Atom/EachQuestion/EachQuestion";
import { useEffect, useState } from "react";
import { FetchData } from "../../services/Api";

function Questions() {
  const [active, setActive] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchData(setData);
  }, []);
  return (
    <div className="question_div">
      <h1 className="faq">FAQ</h1>
      {data.quotes?.slice(3, 8).map((each, key) => {
        return (
          <EachQuestion
            key={key}
            isActive={active === key}
            onClick={() => setActive(active === key ? null : key)}
            author={each.author}
            quote={each.quote}
          />
        );
      })}
    </div>
  );
}
export default Questions;
