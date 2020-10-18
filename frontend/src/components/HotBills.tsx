import React, {Component} from 'react';
import Example from "./Example";
import ExampleBill from './ExampleBill';

interface HotBillsProps {
   
}

class HotBills extends Component<HotBillsProps> {

   // assume that the calls to backend for example topics
   // and the related senators would be made here, and then
   // could pass in the list of 3 senators to populate in the
   // Example component

   populateBills= (): any => {
      return null;
   }

   render() {
      return (
         <section id="hot-bills">
            <h1>Hot Bills</h1>
            <ExampleBill billNumber="H.R.4447" 
                         topic="Providing money for clean-energy research and changing rules for energy efficiency"
                         summary="Requires the Department of Energy to award grants to assist rural electric cooperatives with identifying, evaluating, designing, and demonstrating energy storage and microgrid projects that utilize energy from renewable energy sources."
                         favorPercent={0.55}>
            </ExampleBill>
            <ExampleBill billNumber="H.R.2574" 
                         topic="Allowing lawsuits against discrimination in education programs regardless of officials’ intent"
                         summary="Authorizes private civil causes of action for disparate impact violations (to the same extent as intentional violations) of federal regulations of general applicability that prohibit discrimination on the ground of race, color, or national origin (...)"
                         favorPercent={0.75}>
            </ExampleBill>
         </section>
      )
   }
}

export default HotBills;