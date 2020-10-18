import React, {Component} from 'react';
import './styles/App.css';
import HotTopics from './components/HotTopics';
import SearchSection from './components/SearchSection';
import HowItWorks from './components/HowItWorks';
import HotBills from './components/HotBills';
import ArcVisualization from './components/visualizations/ArcVisualization';

interface AppState {
  query: string;
  chamber: string;
}


class App extends Component<{}, AppState> {

  constructor(props: any) {
      super(props);
      this.state = {
        query: "",
        chamber: ""
      };
  }

  onQuerySubmit = (newQuery: string) => {
    this.setState({
      query: newQuery,
      chamber: "house"
    });
  }

  render() {

    return (
        <main>
            <header>
              <img src={ require('./resources/standpoint_logo.svg') }/>
            </header>
            <SearchSection onChange={this.onQuerySubmit}></SearchSection>
            <ArcVisualization prompt={this.state.query}
                              chamber={this.state.chamber}/>
            <HowItWorks></HowItWorks>
            <HotTopics></HotTopics>
            <HotBills></HotBills>
        </main>
    );
  }
}

export default App;

