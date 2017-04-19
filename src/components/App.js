import React, { Component } from 'react';
import GettingStartedPage from './presentational/GettingStartedPage'
import PersonalDetailsPage from "./presentational/PersonalDetailsPage";

import styles from './App.css';
import ExperienceDetailsPage from "./presentational/ExperienceDetailsPage";

class App extends Component {

  constructor(props) {
    super(props);

    this.submitFormState = this.submitFormState.bind(this);
    this.setPage = this.setPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.state = {
      currentPage: 1,
      totalPages: 5,
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

  nextPage() {
    const { currentPage, totalPages } = this.state;
    const nextPage = currentPage + 1;
    if (nextPage < totalPages) {
      this.setPage(nextPage);
    }
  }

  previousPage() {
    const currentPage = this.state.currentPage;
    const nextPage = currentPage - 1;
    if (nextPage >= 0) {
      this.setPage(nextPage);
    }
  }

  setPage(currentPage) {
    this.setState({currentPage});
  }

  render() {
    const {name, email, surnamePrefix, surname, phonenumber, wantsCalls, hasFirstAidCertificate, isBHVCertified, hasTapLicense, canTapBeer} = this.state.values;

    var page = <div></div>;
    switch (this.state.currentPage) {
        case 1:
          page = <PersonalDetailsPage
              submitFormState={this.submitFormState}
              name={name}
              nextPage={this.nextPage}
              previousPage={this.previousPage}
              formState={{surnamePrefix, surname, phonenumber, wantsCalls}} />;
          break;
        case 2:
          page = <ExperienceDetailsPage
              submitFormState={this.submitFormState}
              nextPage={this.nextPage}
              previousPage={this.previousPage}
              formState={{hasFirstAidCertificate, isBHVCertified, hasTapLicense, canTapBeer}}/>;
            break;
        default:
          page = <GettingStartedPage
              submitFormState={this.submitFormState}
              nextPage={this.nextPage}
              initialState={{name, email}} />;
    }

    return (
      <div className={styles.app}>
          {page}
      </div>
    );
  }
}

export default App;
