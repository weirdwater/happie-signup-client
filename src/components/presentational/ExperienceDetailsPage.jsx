import React from 'react';

class ExperienceDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = props.initialState
    }

    handleInputChange(event) {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        const name = input.name;
        console.log({name, value});

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitFormState(this.state);
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <label>
                  <input
                      type="checkbox"
                      checked={this.state.hasFirstAidCertificate}
                      onChange={this.handleInputChange}
                      name="hasFirstAidCertificate"/>
                  Ik heb een EHBO diploma.
              </label>
              <label>
                  <input
                      type="checkbox"
                      checked={this.state.isBHVCertified}
                      onChange={this.handleInputChange}
                      name="isBHVCertified"/>
                  Ik heb een BHV certificaat.
              </label>
              <label>
                  <input
                      type="checkbox"
                      checked={this.state.canTapBeer}
                      onChange={this.handleInputChange}
                      name="canTapBeer"/>
                  Ik kan bier tappen.
              </label>
              <label>
                  <input
                      type="checkbox"
                      checked={this.state.hasTapLicense}
                      onChange={this.handleInputChange}
                      name="hasTapLicense"/>
                  Ik heb een tap vergunning.
              </label>
              <input type="submit" value="Volgende"/>
          </form>
        );
    }
}

export default ExperienceDetailsPage;