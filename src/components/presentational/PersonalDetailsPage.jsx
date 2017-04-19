import React from 'react';

class PersonalDetailsPage extends React.Component {
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
                  Tussenvoegsel
                  <input
                      type="text"
                      value={this.state.surnamePrefix}
                      onChange={this.handleInputChange}
                      name="surnamePrefix"/>
              </label>
              <label>
                  Achternaam
                  <input
                      type="text"
                      value={this.state.surname}
                      onChange={this.handleInputChange}
                      name="surname"/>
              </label>
              <label>
                  Telefoonnummer
                  <input
                      type="text"
                      value={this.state.phonenumber}
                      onChange={this.handleInputChange}
                      name="phonenumber"/>
              </label>
              <label>
                  <input
                      type="checkbox"
                      checked={this.state.wantsCalls}
                      onChange={this.handleInputChange}
                      name="wantsCalls"/>
                  Ik mag gebeld worden als invalkracht.
              </label>
              <input type="submit" value="Volgende"/>
          </form>
        );
    }
}

export default PersonalDetailsPage;