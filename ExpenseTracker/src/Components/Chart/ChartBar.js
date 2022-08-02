import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let barfilledHeight='0%';

  if(props.maxValue>0){
  
  barfilledHeight=Math.round((props.value/props.maxValue) *100 )+ '%';
}

  return (
    <div className="Chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barfilledHeight, backgroundColor:'red'}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
