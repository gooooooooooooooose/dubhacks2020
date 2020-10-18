import React, {Component} from 'react';

interface SearchSectionProps {
   onChange(query: string): void;
}

interface SearchSectionState {
   query: string;
}

class SearchSection extends Component<SearchSectionProps, SearchSectionState> {

   constructor(props: SearchSectionProps) {
      super(props);
      this.state = {
         query: "",
      }
   }

   // updates the current state and text displayed in start point entry box
   onInputChange = (event: any) => {
      const newState = {
         query: event.target.value
      };
      this.setState(newState);
   };

   onSubmitClick = () => {
      this.props.onChange(this.state.query);
   };

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
                      value={this.state.query}
                      onChange={this.onInputChange}
                      required placeholder="&quot;Abortion should be a choice&quot;"/>
               <button id="search-button"
                       onClick={this.onSubmitClick}>Get standpoint</button>
            </section>
         </section>
      )
   }
}

export default SearchSection;