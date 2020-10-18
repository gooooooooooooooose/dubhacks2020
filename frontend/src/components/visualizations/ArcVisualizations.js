import React from 'react';

import CanvasJSReact from '../../lib/canvasjs.react'
import URL from '../../backendurl';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ArcVisualization extends React.Component {
  // Props: prompt, chamber
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      length: 0,
    }
  }

  retrievePrediction = () => {
    fetch(`${URL}/base/?statement=${this.props.prompt}&chamber=${this.props.chamber}`)
      .then(payload => payload.json())
      .then(json => {
        let results = json.results;
        this.setState({
          data: results,
          length: results.length
        })
      })
  }

  componentDidMount = () => {
    this.retrievePrediction()
  }

  render = () => {
    let members;

    if (this.props.chamber === 'house') {
      members = 435;
    } else if (this.props.chamber === 'senate') {
      members = 100;
    }
    let dataPoints = [];
    if (members === 100) {
      let m = 0;
      for (let row = 0; row < 6; row++) {
        if (m > this.state.length) {
          break;
        }
        for (let col = 0; col < 21; col++) {
          if (m > this.state.length) {
            break;
          }
          let p = Math.random();
          let name = '---';
          let state = 'XX';
          let pic = '';
          
          if (this.state.data !== null) {
            if (this.state.data[m] === undefined) {
              break;
            }
            p = this.state.data[m].agree;
            name = this.state.data[m].name;
            state = this.state.data[m].state
            let namesplit = name.split(' ');
            pic = `<img src="${URL}/static/base/${state}-${namesplit[namesplit.length - 1]}.jpg" width=50 height=50>`
          }
          
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
            name: name,
            state: state,
            x: row,
            y: col,
            p: p,
            markerColor: `rgba(${c},${i})`,
            markerSize: 9,
            img: pic
          })

          m++;
        }
      }
    } else if (members === 435) {
      let m = 0;
      for (let row = 0; row < 16; row++) {
        for (let col = 0; col < 30; col++){
          let p = Math.random();
          let name = '---';
          let state = 'XX';
          let pic = '';
          
          if (this.state.data !== null) {
            if (this.state.data[m] === undefined) {
              break;
            }
            p = this.state.data[m].agree;
            name = this.state.data[m].name;
            state = this.state.data[m].state
            let namesplit = name.split(' ');
            pic = `<img src="${URL}/static/base/${state}-${namesplit[namesplit.length - 1]}.jpg" width=50 height=50>`
          }

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
            name: name,
            state: state,
            x: row,
            y: col,
            p: p,
            markerColor: `rgba(${c},${i})`,
            markerSize: 7,
            img: pic
          })

          m++;
        }
      }
    }

    const options = {
      legend: {
        verticalAlign: "bottom",
        horizontalAlign: "left",
        fontColor: 'rgba(0,0,0,0)'
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
      data: [
        {
          type: "scatter",
          toolTipContent: "{img}<br/><strong>{name}</strong> ({state}) <br/> Agreement Probability: {p}",
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