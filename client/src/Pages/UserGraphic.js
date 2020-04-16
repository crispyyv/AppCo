import React, { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";
import { useLocation, Link } from "react-router-dom";
import { Chart } from "../components/Chart";
import { Header } from "../components/Header";
import Arrow from "../svg/arrow.svg";
import { Footer } from "../components/Footer";
import Loader from "react-loader-spinner";

export const UserGraphic = () => {
  const { request } = useHttp();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(" ");
  const id = location.state.id;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await request(`/users/${id}`);
      const name = `${response[0].first_name}  ${response[0].last_name}`;
      setData(response);
      setName(name);
      setLoading(false);
    };

    getData();
  }, [request]);

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
            <Link to="/users" className="crumbs__link">
              User Statistic
            </Link>
            <img src={Arrow} alt="arrow" className="arrow" />
            <span className="crumbs__link active">{name}</span>
          </div>
          <div className="chart">
            <h1 className="chart__header">{name}</h1>
            {loading ? (
              <div className="center">
                <Loader type="Puff" height={150} width={150} color="#3A80BA" />
              </div>
            ) : (
              <Chart data={data} />
            )}
          </div>
        </div>
      </div>
      <Footer backgroundColor="#1C3B55" height="57px" marginTop="83px" />
    </>
  );
};
