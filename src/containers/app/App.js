import React from 'react';

import Main from '../../components/main/Main';
import Sidebar from '../../components/sidebar/Sidebar';
import {getState} from '../../../store';
import './App.css';

class App extends React.Component {
  render() {
    const {contacts, user, activeUserId} = getState();
    return (
      <div className="App">
        <Sidebar contacts={Object.values(contacts)}/>
        <Main user={user} activeUserId={activeUserId}/>
      </div>
    );
  }
}

export default App;