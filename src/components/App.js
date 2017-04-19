import React, { Component } from 'react';
import GettingStartedPage from './presentational/GettingStartedPage'
import styles from './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.submitFormState = this.submitFormState.bind(this);

    this.state = {
      name: null,
      email: null,
      surname: null,
      hasFirstAidCertificate: null,
      isBHVCertified: null,
      canTapBeer: null,
      wantsCalls: null,
      pastExperience: null,
      phonenumber: null
    }
  }

  submitFormState(formState) {
    this.setState({...formState})
  }

  render() {
    return (
      <div className={styles.app}>
        <GettingStartedPage
            submitFormState={this.submitFormState}
            initialState={{name: this.state.name, email: this.state.email}} />
      </div>
    );
  }
}

export default App;
