import React from 'react';
import styles from './GettingStartedPage.css';

class GettingStartedPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: '',
            name: '',
            wantsEmail: false
        };
    }

    handleInputChange(event) {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value ;
        const name = input.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const {name, email, wantsEmail} = this.state;
        this.props.newParticipant(name, email, wantsEmail, Date.now());
    }

    render() {
        const submitDisabled = (this.state.name === '' || this.state.email === '');
        return (
            <div className={styles.container}>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <h1>Meld je nu aan als vrijwilliger</h1>
                    <label>
                        Voornaam
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"/>
                    </label>
                    <label>
                        E-mailadres
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"/>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={this.state.wantsEmail}
                            onChange={this.handleInputChange}
                            name="wantsEmail"/>
                        Abbonneer op de nieuwsbrief
                    </label>
                    <input className="button" type="submit" value="Volgende" disabled={submitDisabled}/>
                </form>
            </div>
        );
    }
}

export default GettingStartedPage;