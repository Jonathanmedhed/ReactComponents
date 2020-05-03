import React, { Fragment, useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";

const ChartOrganization = () => {
  const [data1, setData1] = useState([
    {
      label: "CEO",
      type: "person",
      className: "p-person",
      expanded: true,
      data: { name: "Walter White", avatar: "walter.jpg" },
      children: [
        {
          label: "CFO",
          type: "person",
          className: "p-person",
          expanded: true,
          data: { name: "Saul Goodman", avatar: "saul.jpg" },
          children: [
            {
              label: "Tax",
              className: "department-cfo",
            },
            {
              label: "Legal",
              className: "department-cfo",
            },
          ],
        },
        {
          label: "COO",
          type: "person",
          className: "p-person",
          expanded: true,
          data: { name: "Mike E.", avatar: "mike.jpg" },
          children: [
            {
              label: "Operations",
              className: "department-coo",
            },
          ],
        },
        {
          label: "CTO",
          type: "person",
          className: "p-person",
          expanded: true,
          data: { name: "Jesse Pinkman", avatar: "jesse.jpg" },
          children: [
            {
              label: "Development",
              className: "department-cto",
              expanded: true,
              children: [
                {
                  label: "Analysis",
                  className: "department-cto",
                },
                {
                  label: "Front End",
                  className: "department-cto",
                },
                {
                  label: "Back End",
                  className: "department-cto",
                },
              ],
            },
            {
              label: "QA",
              className: "department-cto",
            },
            {
              label: "R&D",
              className: "department-cto",
            },
          ],
        },
      ],
    },
  ]);

  const [data2, setData2] = useState([
    {
      label: "F.C Barcelona",
      expanded: true,
      children: [
        {
          label: "F.C Barcelona",
          expanded: true,
          children: [
            {
              label: "Chelsea FC",
            },
            {
              label: "F.C. Barcelona",
            },
          ],
        },
        {
          label: "Real Madrid",
          expanded: true,
          children: [
            {
              label: "Bayern Munich",
            },
            {
              label: "Real Madrid",
            },
          ],
        },
      ],
    },
  ]);

  const [selection, setSelection] = useState([]);

  let nodeTemplate = (node) => {
    if (node.type === "person") {
      return (
        <div>
          <div className="node-header">{node.label}</div>
          <div className="node-content">
            <img
              alt={node.data.avatar}
              src={require("../../img/" + node.data.avatar)}
              style={{ width: "32px" }}
            />
            <div>{node.data.name}</div>
          </div>
        </div>
      );
    }

    if (node.type === "department") {
      return node.label;
    }
  };

  return (
    <Fragment>
      <div>
        <div className="content-section implementation organizationchart-demo">
          <h3>Advanced</h3>
          <OrganizationChart
            value={data1}
            nodeTemplate={nodeTemplate}
            selection={selection}
            selectionMode="multiple"
            onSelectionChange={(event) => setSelection(event.data)}
            className="company"
          ></OrganizationChart>

          <h3>Basic</h3>
          <OrganizationChart value={data2}></OrganizationChart>
        </div>
      </div>
    </Fragment>
  );
};
export default ChartOrganization;
