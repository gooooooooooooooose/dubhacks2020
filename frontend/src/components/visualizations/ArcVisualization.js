import React from 'react';
import { Chart } from 'react-charts'

import CanvasJSReact from '../../lib/canvasjs.react'
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ArcVisualization extends React.Component {
  // Props: Rows, Total
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  render = () => {

    const members = 435;

    let dataPoints = [];
    if (members === 100) {
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 21; col++) {
          let p = Math.random();
          let c = '0,0,0';
          let i = 0.5

          if (p > 0.5) {
            i = (p - 0.5) * 2;
            c = '124,191,56'
          } else {
            c = '205,82,82'
            i = (0.5 - p) * 2;
          }

          if (i < 0.2) {
            c = '0,0,0';
          }

          dataPoints.push({
            name: 'Norton Pengra',
            state: 'WA',
            x: row,
            y: col,
            p: p,
            markerColor: `rgba(${c},${i})`,
            markerSize: 9
          });
        }
      }
    } else if (members == 435) {
      for (let row = 0; row < 16; row++) {
        for (let col = 0; col < 30; col++){
          let p = Math.random();
          let c = '0,0,0';
          let i = 0.5

          if (p > 0.5) {
            i = (p - 0.5) * 2;
            c = '124,191,56'
          } else {
            c = '205,82,82'
            i = (0.5 - p) * 2;
          }
          dataPoints.push({
            name: 'Norton Pengra',
            state: 'WA',
            x: row,
            y: col,
            p: p,
            markerColor: `rgba(${c},${i})`,
            markerSize: 7,
          })
        }
      }
    }
    

    const options = {
      legend: {
        verticalAlign: "bottom",
        horizontalAlign: "left"
      },
      axisY: {
        gridColor: 'rgba(0,0,0,0)',
        labelFontColor: 'rgba(0,0,0,0)',
        tickLength: 0,
      },
      axisX: {
        gridColor: 'rgba(0,0,0,0)',
        labelFontColor: 'rgba(0,0,0,0)',
        tickLength: 0,
      },
      legend: {
        fontColor: 'rgba(0,0,0,0)'
      },
      data: [
        {
          type: "scatter",
          toolTipContent: "<strong>{name}</strong> ({state}) <br/> Agreement Probability: {p}",
          dataPoints: dataPoints,
          options: {
            backgroundColor: 'rgba(0,0,0,1)' 
          }
        }
      ]
    }

    return (
      <div>
        <CanvasJSChart options={options} />
      </div >
    );
  }

}

export default ArcVisualization;
