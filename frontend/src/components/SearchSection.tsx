import React, {Component} from 'react';

interface SearchSectionProps {
   
}

class SearchSection extends Component<SearchSectionProps> {

   render() {
      return (
         <section id="search-section">
            <section id="title">
               <h1>Find out which members of Congress agrees with you</h1>
            </section>
            <section id="search-bar">
               <input type="text"
                      id="query"
                      name="query"
                      required placeholder="&quot;Abortion should be a choice&quot;"/>
               <button id="search-button">Get standpoint</button>
            </section>
         </section>
      )
   }
}

export default SearchSection;