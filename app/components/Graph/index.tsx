import React from "react";
import styled from "styled-components";
import ReactApexCharts from "react-apexcharts";
import { Stat } from "@/app/interfaces/components";

interface Props {
  stats: Stat[];
}

const Container = styled.div`
  width: 100%;
  padding: 8px;
`;

const Graph: React.FC<Props> = ({ stats }) => {
  const options = {
    // ApexCharts options
    chart: {
      toolbar: {
        show: false,
      },
    },
  };

  const series = [
    {
      name: "Stats",
      data: stats.map((stat) => stat.base_stat),
    },
  ];

  return (
    <Container>
      <ReactApexCharts
        options={options}
        series={series}
        type="bar"
        width="100%"
        height={350}
      />
    </Container>
  );
};

export default Graph;
