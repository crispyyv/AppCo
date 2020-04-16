import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Pagination } from "../components/Pagination";
import { UserStatistic } from "../components/UserStatistic";
import { useHttp } from "../hooks/http.hook";
import Arrow from "../svg/arrow.svg";

export const Users = () => {
  const { request } = useHttp();

  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowPerPage, setRowPerPage] = useState(16);
  const [prevPage, setPrevPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await request("/users");

      setRows(response);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    getData();
  }, []);
  //Get current rows
  const indexOfLastRow = currentPage * rowPerPage;
  const indexOfFirstRow = indexOfLastRow - rowPerPage;
  const currentTable = rows.slice(indexOfFirstRow, indexOfLastRow);
  const totalPage = rows.length;
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPrevPage(pageNumber - 1);
  };

  const changePage = (direction) => {
    if (direction === "back") {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next") {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="container__inner">
          <div className="crumbs">
            <Link to="/" className="crumbs__link">
              Main Page
            </Link>
            <img src={Arrow} alt="arrow" className="arrow" />
            <Link to="#" className="crumbs__link active">
              Users Statistic
            </Link>
          </div>
          {loading ? (
            <div className="center">
              <Loader type="Puff" height={150} width={150} color="#3A80BA" />
            </div>
          ) : (
            <>
              <UserStatistic data={currentTable} isFetching={loading} />
              <Pagination
                rowPerPage={rowPerPage}
                totalPage={totalPage}
                currentPage={currentPage}
                paginate={paginate}
                changePage={changePage}
              />
            </>
          )}
        </div>
      </div>
      <Footer backgroundColor="#1C3B55" height="57px" />
    </>
  );
};
