import React, { Component } from 'react';
import GettingStartedPage from './presentational/GettingStartedPage'
import PersonalDetailsPage from "./presentational/PersonalDetailsPage";

import styles from './App.css';
import ExperienceDetailsPage from "./presentational/ExperienceDetailsPage";

class App extends Component {

  constructor(props) {
    super(props);

    this.submitFormState = this.submitFormState.bind(this);

    this.state = {
      values: {
          name: '',
          email: '',
          surnamePrefix: '',
          surname: '',
          hasFirstAidCertificate: false,
          isBHVCertified: false,
          canTapBeer: false,
          hasTapLicense: false,
          wantsCalls: false,
          pastExperience: '',
          phonenumber: ''
      }
    }
  }

  submitFormState(formState) {
    const previousValues = {...this.state.values}

    const values = Object.assign({}, previousValues, formState);

    this.setState({values})
  }

  render() {
    const {name, email, surnamePrefix, surname, phonenumber, wantsCalls, hasFirstAidCertificate, isBHVCertified, hasTapLicense, canTapBeer} = this.state.values;
    return (
      <div className={styles.app}>
        <GettingStartedPage
            submitFormState={this.submitFormState}
            initialState={{name, email}} />
        <PersonalDetailsPage
            submitFormState={this.submitFormState}
            name={name}
            initialState={{surnamePrefix, surname, phonenumber, wantsCalls}} />
        <ExperienceDetailsPage
            submitFormState={this.submitFormState}
            initialState={{hasFirstAidCertificate, isBHVCertified, hasTapLicense, canTapBeer}}/>
      </div>
    );
  }
}

export default App;
