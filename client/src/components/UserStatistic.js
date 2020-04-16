import React from "react";
import { useHistory } from "react-router-dom";
export const UserStatistic = ({ data, isFetching }) => {
  const history = useHistory();
  const headers = [
    "Id",
    "First Name",
    "Last Name",
    "Email",
    "Gender",
    "Ip address",
    "Total clicks",
    "Total page views",
  ];

  if (isFetching) {
    return <h2>Fetching table...</h2>;
  }

  const renderTableData = (data, func) => {
    return data.map((row, index) => {
      const {
        id,
        first_name,
        last_name,
        email,
        gender,
        ip_address,
        total_clicks,
        total_page_views,
      } = row;
      return (
        <tr key={id} onClick={func} data-id={id}>
          <td data-id={id}>{id}</td>
          <td data-id={id}>{first_name}</td>
          <td data-id={id}>{last_name}</td>
          <td data-id={id}>{email}</td>
          <td data-id={id}>{gender}</td>
          <td data-id={id}>{ip_address}</td>
          <td data-id={id}>{total_clicks}</td>
          <td data-id={id}>{total_page_views}</td>
        </tr>
      );
    });
  };

  const handleOpenGraph = (e) => {
    const id = e.target.dataset.id;
    history.push(`/users/${id}`, { id: id });
  };

  const handleShowTable = () => {
    return (
      <table className="table">
        <thead>
          <tr className="table__head">
            {headers.map((v, index) => {
              return (
                <td className="td" key={index}>
                  {v}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>{renderTableData(data, handleOpenGraph)}</tbody>
      </table>
    );
  };

  return (
    <section className="users__statistics">
      <h1>Users statistics</h1>
      {handleShowTable()}
    </section>
  );
};
