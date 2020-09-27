import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const App = () => {
  return (
      <Router>
        <div>
            <Header />
            <div className="app-body">
                {/* <Left /> */}
                {/* <div className={this.props.leftbar ? 'main' : 'main left-closed'}> */}
                <Switch>
                    {/* <Route exact path="/" component={Home} />
                    <Route exact path="/users" component={Users} /> */}
                </Switch>
                {/* </div> */}
            </div>
        </div>
      </Router>
  );
}

export default App;
