import React from 'react';
import Form from './Form';
import PageControls from './PageControls';

class PersonalDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = props.initialState;

        this.fields = [
            {
                name: 'surnamePrefix',
                type: 'text',
                label: 'Tussenvoegsel',
                placeholder: 'van den'
            },
            {
                name: 'surname',
                type: 'text',
                label: 'Achternaam',
                placeholder: 'Klaas',
                required: true
            },
            {
                name: 'phonenumber',
                type: 'text',
                label: 'Telefoonnummer',
                placeholder: '0612345678',
                required: true
            },
            {
                name: 'wantsCalls',
                type: 'checkbox',
                label: 'Ik mag gebeld worden als invalkracht',
            }
        ]
    }

    handleFormChange(nextInputState) {
        console.log('page', nextInputState);
        this.setState(nextInputState);
    }

    handleSubmit() {
        this.props.submitFormState(this.state);
    }

    render() {
        return (
            <div>
                <section>
                    <h1>Tof dat je wilt helpen, {this.props.name}!</h1>
                    <p>Voor onze eigen administratie hebben wij nog een aantal details nodig. Zoals hoe wij contact met je op kunnen nemen etc.</p>
                </section>
                <PageControls nextAction={this.handleSubmit} />
                <Form handleFormChange={this.handleFormChange} fields={this.fields} formState={this.state} />
            </div>
        );
    }
}

export default PersonalDetailsPage;