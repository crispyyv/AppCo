import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Brush,
  ResponsiveContainer,
} from "recharts";

export const Chart = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="chart__graph-first">
        <h2 className="chart__name">Clicks</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} syncId="syncGraph" transition=" all 0.5s ease">
            <CartesianGrid stroke="#F1F1F1" vertical={false} />
            <YAxis stroke="#CCCCCC" dx={-5} />
            <XAxis dataKey="date" stroke="#CCCCCC" height={72} />
            <Line
              type="monotone"
              dataKey="clicks"
              stroke="#3A80BA"
              strokeWidth="4"
              strokeOpacity="1"
              dot={{ visibility: "hidden" }}
            />
            <Tooltip />
            <Brush dataKey="date" height={30} stroke="#3A80BA" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart__graph-second">
        <h2 className="chart__name">Views</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} syncId="syncGraph">
            <CartesianGrid stroke="#F1F1F1" vertical={false} />
            <YAxis stroke="#CCCCCC" dx={-5} />
            <XAxis dataKey="date" stroke="#CCCCCC" />
            <Line
              type="monotone"
              dataKey="page_views"
              stroke="#3A80BA"
              strokeWidth="4"
              strokeOpacity="1"
              dot={{ visibility: "hidden" }}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};
