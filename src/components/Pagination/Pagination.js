import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import "./Pagination.css";

export const Pagination = () => {
  const { currentPage, setCurrentPage } = useContext(GlobalContext);

  const handlePageClick = (e) => {
    setCurrentPage(e.target.value);
  };
  return (
    <div>
      <ul className="pagination">
        <li
          className={currentPage === 1 && "active"}
          onClick={handlePageClick}
          value="1"
        >
          1
        </li>
        <li
          className={currentPage === 2 && "active"}
          onClick={handlePageClick}
          value="2"
        >
          2
        </li>
        <li
          className={currentPage === 3 && "active"}
          onClick={handlePageClick}
          value="3"
        >
          3
        </li>
        <li
          className={currentPage === 4 && "active"}
          onClick={handlePageClick}
          value="4"
        >
          4
        </li>
      </ul>
    </div>
  );
};
