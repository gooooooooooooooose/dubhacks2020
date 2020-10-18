import React, {Component} from 'react';

class HowItWorks extends Component {

   render() {
      return (
         <section id="how-it-works">
            <section className="section-header">
               <h1>How it works</h1>
               <h4></h4>
            </section>
            <section id="opinions">
               <div><img src={ require('../resources/cloud.svg') }/></div>
               <div>
                  <h2>You've got an opinion...</h2>
                  <div>
                     <p>"Businesses shouldn’t refuse same sex couples"</p>
                     <p>"We should increase renewable energy initiatives"</p>
                     <p>"The wall will keep illegal immigrants out"</p>
                  </div>
               </div>
            </section>
            <section id="but">
               <div>
                  <h2>But...</h2>
                  <ul>
                     <li>&#x25cf;&nbsp;&nbsp;You’re flooded by media and news that you have no time to decipher</li>
                     <li>&#x25cf;&nbsp;&nbsp;Unclear on specific congressperson or bill to support</li>
                     <li>&#x25cf;&nbsp;&nbsp;Ultimately want to translate those beliefs into a vote for something real</li>
                  </ul>
               </div>
               <section>
                  <img id="how-it-works-cloud" src={ require("../resources/cloud.svg") }/>
                  <img id="how-it-works-arrow" src={ require("../resources/arrow.svg") }/>
                  <img id="how-it-works-mail" src={ require("../resources/mail.svg") }/>
               </section>
            </section>
            <section id="usage">
               <div id="usage-example">
                  <img src={ require("../resources/usage.svg") }/>
               </div>
               <div id="get-a-standpoint">
                  <h2>Get a standpoint</h2>
                  <p>Type in any opinion and we will sift through thousands of data points on bills and every congressperson’s voting history.</p>
               </div>
               <div>
                  <ul>
                     <li>&#x25cf;&nbsp;&nbsp;We take your opinion and match it to the pertinent people and policies..</li>
                     <li>&#x25cf;&nbsp;&nbsp;We’ll show you the status of the House and Senate so you can get a better picture of their consensus, and provide you with the visualizations and tools to explore each member’s standpoint.</li>
                     <li>&#x25cf;&nbsp;&nbsp;You’ll be able to stay on top of what you most care about, and be able to take action in a concrete way.</li>
                  </ul>
               </div>
            </section>
         </section>
      )
   }
}

export default HowItWorks;