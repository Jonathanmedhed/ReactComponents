import React, { Fragment } from "react";
import { Chart } from "primereact/chart";

const PolarAreaChart = () => {
  const data = {
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
        ],
        label: "My dataset",
      },
    ],
    labels: ["Red", "Green", "Yellow", "Grey", "Blue"],
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation">
          <Chart type="polarArea" data={data} />
        </div>
      </div>
    </Fragment>
  );
};
export default PolarAreaChart;
