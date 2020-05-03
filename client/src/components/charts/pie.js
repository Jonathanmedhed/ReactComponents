import React, { Fragment } from "react";
import { Chart } from "primereact/chart";

const PieChart = () => {
  const data = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <Chart type="pie" data={data} />
        </div>
      </div>
    </Fragment>
  );
};
export default PieChart;
