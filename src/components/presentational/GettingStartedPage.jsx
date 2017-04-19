import React from 'react';
import LabeledInput from './LabeledInput';

class GettingStartedPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = props.initialState
    }

    handleInputChange(event) {
        const input = event.target;
        const value = input.value;
        const name = input.name;
        console.log({name, value})

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
                  Name
                  <input
                      type="text"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      name="name"/>
              </label>
              <label>
                  E-mail adres
                  <input
                      type="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      name="email"/>
              </label>
              <input type="submit" value="Volgende"/>
          </form>
        );
    }
}

export default GettingStartedPage;