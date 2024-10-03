import React from "react";
import Estimationjourny from "./Estimationjourny";
import SpecificEstimation from "./SpecificEstimation";
import TrendingEstimation from "./TrendingEstimation";

function Home() {
  return (
    <div>
      <Estimationjourny />
      <SpecificEstimation />
      <TrendingEstimation />
    </div>
  );
}

export default Home;
