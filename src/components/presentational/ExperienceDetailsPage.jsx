import React from 'react';
import FormPage from "./FormPage";

class ExperienceDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.fields = [
            {
                name: 'hasFirstAidCertificate',
                type: 'checkbox',
                label: 'Ik beschik over een EHBO diploma.',
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

    render() {
        return (
            <FormPage {...this.props} fields={this.fields}>
                <h1>Horeca ervaring</h1>
                <p>Graag horen wij ook wat jou ervaring is binnen de horeca.</p>
            </FormPage>
        );
    }
}

export default ExperienceDetailsPage;