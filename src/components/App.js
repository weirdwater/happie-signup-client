import React, { Component } from 'react';
import GettingStartedPage from './presentational/GettingStartedPage'
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <GettingStartedPage/>
      </div>
    );
  }
}

export default App;
