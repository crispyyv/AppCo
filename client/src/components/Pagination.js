import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ({
  rowPerPage,
  totalPage,
  currentPage,
  paginate,
  changePage,
}) => {
  const pageNumbers = [];
  const maxPageNumber = 5;
  for (let i = 1; i <= Math.ceil(totalPage / rowPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <li className="pagination__item button">
        <button
          className="pagination__button"
          onClick={() => changePage("back")}
          disabled={currentPage === 1}
        >
          <i
            className={`arrow-icon left ${currentPage !== 1 ? "active" : ""}`}
          ></i>
        </button>
      </li>
      {pageNumbers.splice(currentPage - 1, maxPageNumber).map((number) => (
        <li
          key={number}
          className={`pagination__item ${
            number === currentPage ? "active" : ""
          }`}
          onClick={() => {
            paginate(number);
          }}
        >
          <Link
            to="#"
            className={`pagination__link ${
              number === currentPage ? "active" : ""
            }`}
          >
            {number}
          </Link>
        </li>
      ))}
      {/* {renderPageNumbers()} */}
      <li className="pagination__item button">
        <button
          className="pagination__button"
          onClick={() => changePage("next")}
          disabled={currentPage === 63}
        >
          <i
            className={`arrow-icon right ${currentPage !== 63 ? "active" : ""}`}
          ></i>
        </button>
      </li>
    </ul>
  );
};
