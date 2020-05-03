import React, { Fragment } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

const ChartStraight = () => {
  const series = [
    {
      name: "Series 1",
      data: [
        { category: "A", value: Math.random() },
        { category: "B", value: Math.random() },
        { category: "C", value: Math.random() },
      ],
    },
    {
      name: "Series 2",
      data: [
        { category: "B", value: Math.random() },
        { category: "C", value: Math.random() },
        { category: "D", value: Math.random() },
      ],
    },
    {
      name: "Series 3",
      data: [
        { category: "C", value: Math.random() },
        { category: "D", value: Math.random() },
        { category: "E", value: Math.random() },
      ],
    },
  ];

  return (
    <Fragment>
      {/** Straight Lines */}
      <div className="hide-sm">
        <LineChart width={500} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            type="category"
            allowDuplicatedCategory={false}
          />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          {series.map((s) => (
            <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
          ))}
        </LineChart>
      </div>
      <div className="show-sm">
        <LineChart width={350} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            type="category"
            allowDuplicatedCategory={false}
          />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          {series.map((s) => (
            <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
          ))}
        </LineChart>
      </div>
    </Fragment>
  );
};
export default ChartStraight;
