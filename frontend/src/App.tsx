import React, {Component} from 'react';
import './styles/App.css';
import HotTopics from './components/HotTopics';
import SearchSection from './components/SearchSection';
import HowItWorks from './components/HowItWorks';
import HotBills from './components/HotBills';
import ArcVisualizations from './components/visualizations/ArcVisualizations';

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
      chamber: "senate"
    });
    this.updateDisplay();
  }

  updateDisplay = (): any => {
    if (this.state.query === ""){
      return "none";
    } else {
      return "block";
    }
  }


  render() {
    const visualizationStyle = {
      display: this.updateDisplay()
    }

    return (
        <main>
            <header>
              <img src={ require('./resources/standpoint_logo.svg') }/>
            </header>
            <SearchSection onChange={this.onQuerySubmit}></SearchSection>
            <ArcVisualizations prompt={this.state.query}></ArcVisualizations>
            <HowItWorks></HowItWorks>
            <HotTopics></HotTopics>
            <HotBills></HotBills>
        </main>
    );
  }
}

export default App;

