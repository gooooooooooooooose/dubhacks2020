import React, {Component} from 'react';
import ExampleSenator from './ExampleSenator';

interface ExampleProps {
   topic: string;
   summary: string;
   exampleSenators: object[] | null;
}

class Example extends Component<ExampleProps> {

   constructor(props: ExampleProps) {
      super(props);
   }

   render() {
      return (
         <section className="example">
            <section className="summary">
               <section className="texts">
                  <h2>{this.props.topic}</h2>
                  <p>{this.props.summary}</p>
               </section>
               <section className="hot-topics-buttons">
                  <button id="learn-more-button">Learn more</button>
                  <button id="policies-button">Policies</button>
               </section>
            </section>
            <section className="display-senators">
               <ExampleSenator //imgPath='../resources/tn-alexander.png'
                               name="Lamar Alexander"
                               party="R"
                               state="TN"
                               type="Senator">
               </ExampleSenator>
               <ExampleSenator //imgPath="../resources/tn-blackburn.jpg"
                               name="Marsha Blackburn"
                               party="D"
                               state="TN"
                               type="Senator">
               </ExampleSenator>
               <ExampleSenator //imgPath="../resources/mn-coleman.jpeg"
                               name="Lamar Alexander"
                               party="R"
                               state="TN"
                               type="Senator">
               </ExampleSenator>
            </section>
         </section>
      )
   }
}

export default Example;