import React from 'react';
import FormPage from './FormPage';

class PersonalDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.fields = [
            {
                name: 'surnamePrefix',
                type: 'text',
                label: 'Tussenvoegsel',
            },
            {
                name: 'surname',
                type: 'text',
                label: 'Achternaam',
                required: true
            },
            {
                name: 'phonenumber',
                type: 'text',
                label: 'Telefoonnummer',
                pattern: /^\d{10}$/,
                placeholder: '06...',
                required: true
            },
            {
                name: 'wantsCalls',
                type: 'checkbox',
                label: 'Zet mij op de Bel-me-maar-lijst',
            }
        ]
    }

    render() {
        return (
            <FormPage {...this.props} fields={this.fields}>
                <h1>Tof dat je wilt helpen, {this.props.name}!</h1>
                <p><strong>Bel-me-maar-lijst</strong>: Indien nodig kunnen we je op het laatste moment bellen, met de vraag of je kunt helpen. Jij beslists altijd of je wel of niet komt.</p>
            </FormPage>
        );
    }
}

export default PersonalDetailsPage;