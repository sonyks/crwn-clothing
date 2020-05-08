import React from 'react';
import './App.css';
import HomePage from '../src/pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom';

const TopicList = (props) => (
  <div>
    <h1>TOPIC LIST PAGE</h1>
  </div>
);

const TopicDetail = (props) => (
  <div>
    <h1>TOPIC DETAIL PAGE {props.match.params.topicId}</h1>
  </div>
);

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/topics' component={TopicList}/>
        <Route exact path='/topics/:topicId' component={TopicDetail}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
