import React, { Fragment } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  AreaChart,
  Area,
} from "recharts";

const ChartArea = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <Fragment>
      {/** Area Chart */}
      <div className="hide-sm">
        <AreaChart
          width={550}
          height={300}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
          <ReferenceLine y={9800} label="Max" stroke="red" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
      <div className="show-sm">
        <AreaChart
          width={350}
          height={300}
          data={data}
          syncId="anyId"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <ReferenceLine x="Page C" stroke="red" label="Max PV PAGE" />
          <ReferenceLine y={9800} label="Max" stroke="red" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
    </Fragment>
  );
};
export default ChartArea;
