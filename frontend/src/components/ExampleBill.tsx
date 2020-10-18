import React, {Component} from 'react';

interface ExampleBillProps {
   billNumber: string;
   // imgPath: string;
   topic: string;
   summary: string;
   favorPercent: number;
}

class ExampleBill extends Component<ExampleBillProps> {
   constructor(props: ExampleBillProps) {
      super(props);
   }

   render() {
      return (
         <div id="example-bill">
            <div id="example-bill-image"><img src={ require("../resources/grey.png") }/></div>
            <div id="example-bill-overview">
               <p id="example-bill-number">{this.props.billNumber}</p>
               <p id="example-bill-topic">{this.props.topic}</p>
               <div id="example-bill-favor">
                  [green/red line graph here for] -- %{this.props.favorPercent} favored
               </div>
            </div>
            <div id="example-bill-detail">
               <p id="example-bill-summary">{this.props.summary}</p>
               <div id="example-bill-buttons">
                  <button id="learn-more-button">Learn more</button>
                  <button id="policies-button">Key players</button>
               </div>
            </div>
         </div>
      )
   }
}

export default ExampleBill;