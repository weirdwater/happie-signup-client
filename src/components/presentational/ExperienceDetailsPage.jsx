import React from 'react';
import Form from './Form';
import PageControls from "./PageControls";

class ExperienceDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = props.initialState

        this.fields = [
            {
                name: 'hasFirstAidCertificate',
                type: 'checkbox',
                label: 'Ik heb een EHBO diploma.',
            },
            {
                name: 'isBHVCertified',
                type: 'checkbox',
                label: 'Ik ben BHV\'er',
            },
            {
                name: 'canTapBeer',
                type: 'checkbox',
                label: 'Ik kan bier tappen.',
            },
            {
                name: 'hasTapLicense',
                type: 'checkbox',
                label: 'Ik heb een tap vergunning',
            },
            {
                name: 'pastExperience',
                type: 'textarea',
                label: 'Overige ervaring'
            }
        ]
    }

    handleFormChange(nextInputState) {
        console.log('page', nextInputState);
        this.setState(nextInputState);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submitFormState(this.state);
    }

    render() {
        return (
            <div>
                <section>
                    <h1>Horeca ervaring</h1>
                    <p>Graag horen wij ook wat jou ervaring is binnen de horeca.</p>
                </section>
                <PageControls/>
                <Form handleFormChange={this.handleFormChange} fields={this.fields} formState={this.state}/>
            </div>
        );
    }
}

export default ExperienceDetailsPage;