import React, {Component} from 'react';
import Example from "./Example";

interface HotTopicsProps {
   
}

class HotTopics extends Component<HotTopicsProps> {

   // assume that the calls to backend for example topics
   // and the related senators would be made here, and then
   // could pass in the list of 3 senators to populate in the
   // Example component

   populateSenators = (): any => {
      return null;
   }

   render() {
      return (
         <section id="hot-topics">
            <h1>Hot Topics</h1>
            <Example topic="Defund police"
                     summary="Decreasing the funding of law enforcement in response to the brutality used by the police, especially on Black Americans recently following George Floyd."
                     exampleSenators={this.populateSenators()}>
            </Example>
            <Example topic="Cut taxes"
                     summary="While cutting taxes could implicate a variety of tax policies, including income and
                        business taxes, this is evalutated with all of them in mind and in a general sense."
                     exampleSenators={this.populateSenators()}>
            </Example>
         </section>
      )
   }
}

export default HotTopics;