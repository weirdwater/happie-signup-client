import React, { Component } from 'react';
import base from '../base';
import GettingStartedPage from './presentational/GettingStartedPage'
import PersonalDetailsPage from "./presentational/PersonalDetailsPage";

import styles from './App.css';
import ExperienceDetailsPage from "./presentational/ExperienceDetailsPage";
import LastPage from "./presentational/LastPage";
import PositionPage from "./presentational/PositionPage";
import DaysPage from "./presentational/DaysPage";

class App extends Component {

  constructor(props) {
    super(props);

    this.submitFormState = this.submitFormState.bind(this);
    this.setPage = this.setPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.newParticipant = this.newParticipant.bind(this);
    this.endForm = this.endForm.bind(this);

    this.state = {
      totalPages: 5,
      values: {
      }
    }
  }

  componentWillUnmount() {
      base.removeBinding(this.ref);
      window.localStorage.setItem('participantId', this.state.participantId);
      if (this.ref) {
          base.removeBinding(this.ref);
      }
  }



  newParticipant(name, email, wantsEmail, timestamp) {
    const id = `${Date.now()}-${name}`;
    this.ref = base.syncState(`${id}/signup`, {
        context: this,
        state: 'values'
    });
    this.setState({
      participantId: id,
      currentPage: 0,
      values: {
        email,
        name,
        wantsEmail,
        timestamp
      }
    });

  }

  submitFormState(formState) {
    const previousValues = this.state.values;
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

  endForm() {
      if (this.ref) {
          base.removeBinding(this.ref);
      }
      this.setState({
          totalPages: 5,
          currentPage: 4,
          values: {}
      });
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
    const {name, email, wantsEmail} = this.state.values;
    const { currentPage, totalPages } = this.state;

    let page = <div></div>;
    switch (this.state.currentPage) {
        case 0:
          page = <PersonalDetailsPage
              submitFormState={this.submitFormState}
              name={name}
              nextPage={this.nextPage}
              previousPage={this.previousPage}
              currentPage={currentPage}
              totalPages={totalPages}
              formState={this.state.values} />;
          break;
        case 1:
          page = <ExperienceDetailsPage
              submitFormState={this.submitFormState}
              nextPage={this.nextPage}
              previousPage={this.previousPage}
              currentPage={currentPage}
              totalPages={totalPages}
              formState={this.state.values}/>;
            break;
        case 4:
            page = <LastPage
                endForm={this.endForm}
            />;
            break;
        case 2:
            page = <PositionPage
                submitFormState={this.submitFormState}
                nextPage={this.nextPage}
                previousPage={this.previousPage}
                currentPage={currentPage}
                totalPages={totalPages}
                formState={this.state.values}/>;
            break;
        case 3:
            page = <DaysPage
                submitFormState={this.submitFormState}
                nextPage={this.nextPage}
                previousPage={this.previousPage}
                currentPage={currentPage}
                totalPages={totalPages}
                formState={this.state.values}/>;
            break;
        default:
          page = <GettingStartedPage
              newParticipant={this.newParticipant}
              nextPage={this.nextPage} />;
    }

    return (
      <div className={styles.app}>
          {page}
      </div>
    );
  }
}

export default App;
