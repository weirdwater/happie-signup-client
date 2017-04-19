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

    render() {
        return (
            <FormPage {...this.props} fields={this.fields}>
                <h1>Tof dat je wilt helpen, {name}!</h1>
                <p>Voor onze eigen administratie hebben wij nog een aantal details nodig. Zoals hoe wij contact met je op kunnen nemen etc.</p>
            </FormPage>
        );
    }
}

export default PersonalDetailsPage;