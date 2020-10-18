import React, {Component} from 'react';
import '../styles/ExampleSenator.css';

interface ExampleSenatorProps {
   //imgPath: string;
   name: string;
   party: string;
   state: string;
   type: string;
}

//TODO: some error with passing the string down thru props?

class ExampleSenator extends Component<ExampleSenatorProps> {

   constructor(props: ExampleSenatorProps) {
      super(props);
   }

   // want to add in border colors depending on party
   // "border-top: 8px solid <color>"
   // R -> #CD5252
   // D -> #4F67E4
   // I -> #DFC01E
   // ALSO give the <span> style="color:#<color>"

   render() {
      return (
         <section className="senator">
            <img src={ require("../resources/tn-alexander.png") }/>
            <h3>{this.props.name}</h3>
            <p>
               <span>
                  [{this.props.party}]
               </span> 
               {this.props.state} {this.props.type}
            </p>
         </section>
      )
   }
}

export default ExampleSenator;