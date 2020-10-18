import React, {Component} from 'react';
import './styles/App.css';
import HotTopics from './components/HotTopics';
import SearchSection from './components/SearchSection';
import HowItWorks from './components/HowItWorks';
import HotBills from './components/HotBills';

interface AppState {
  pog: string;
}


class App extends Component<{}, AppState> {

  constructor(props: any) {
      super(props);
      this.state = {
        pog: "",
      };
  }


  render() {
      return (
          <main>
              <header>
                <img src={ require('./resources/standpoint_logo.svg') }/>
              </header>
              <SearchSection></SearchSection>
              <HowItWorks></HowItWorks>
              <HotTopics></HotTopics>
              <HotBills></HotBills>
          </main>
      );
  }
}

export default App;

