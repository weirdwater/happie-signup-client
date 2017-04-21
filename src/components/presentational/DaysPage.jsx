import React from 'react'
import FormPage from "./FormPage";

class DaysPage extends React.Component {
    constructor(props) {
        super(props)

        this.handleFormSubmit = this.handleFormSubmit.bind(this)

        this.fields = [
            {
                name: 'date-2017-05-09',
                type: 'checkbox',
                label: 'Dinsdag 9 mei 2017',
            },
            {
                name: 'date-2017-05-10',
                type: 'checkbox',
                label: 'Woensdag 10 mei 2017',
            },
            {
                name: 'date-2017-05-11',
                type: 'checkbox',
                label: 'Donderdag 11 mei 2017',
            },
            {
                name: 'date-2017-05-12',
                type: 'checkbox',
                label: 'Vrijdag 12 mei 2017',
            },
            {
                name: 'date-2017-05-13',
                type: 'checkbox',
                label: 'Zaterdag 13 mei 2017',
            },
            {
                name: 'date-2017-05-16',
                type: 'checkbox',
                label: 'Dinsdag 16 mei 2017',
            },
            {
                name: 'date-2017-05-17',
                type: 'checkbox',
                label: 'Woensdag 17 mei 2017',
            },
            {
                name: 'date-2017-05-18',
                type: 'checkbox',
                label: 'Donderdag 18 mei 2017',
            },
            {
                name: 'date-2017-05-19',
                type: 'checkbox',
                label: 'Vrijdag 19 mei 2017',
            },
            {
                name: 'date-2017-05-20',
                type: 'checkbox',
                label: 'Zaterdag 20 mei 2017',
            },
            {
                name: 'date-2017-05-23',
                type: 'checkbox',
                label: 'Dinsdag 23 mei 2017',
            },
            {
                name: 'date-2017-05-24',
                type: 'checkbox',
                label: 'Woensdag 24 mei 2017',
            },
            {
                name: 'date-2017-05-25',
                type: 'checkbox',
                label: 'Donderdag 25 mei 2017',
            },
            {
                name: 'date-2017-05-26',
                type: 'checkbox',
                label: 'Vrijdag 26 mei 2017',
            },
            {
                name: 'date-2017-05-27',
                type: 'checkbox',
                label: 'Zaterdag 27 mei 2017',
            },
            {
                name: 'date-2017-05-30',
                type: 'checkbox',
                label: 'Dinsdag 30 mei 2017',
            },
            {
                name: 'date-2017-05-31',
                type: 'checkbox',
                label: 'Woensdag 31 mei 2017',
            },
            {
                name: 'date-2017-06-01',
                type: 'checkbox',
                label: 'Donderdag 1 juni 2017',
            },
            {
                name: 'date-2017-06-02',
                type: 'checkbox',
                label: 'Vrijdag 2 juni 2017',
            },
            {
                name: 'date-2017-06-03',
                type: 'checkbox',
                label: 'Zaterdag 3 juni 2017',
            }
        ]
    }

    handleFormSubmit(days) {
        const available = {}
        this.fields.forEach(field => {
            available[field.name] = days[field.name] || false
        })
        this.props.submitFormState({available: available})
    }

    render() {
        let { handleFormSubmit, ...props } = this.props
        return (
            <FormPage {...props} fields={this.fields} submitFormState={this.handleFormSubmit} >
                <h1>Beschikbaarheid</h1>
            </FormPage>
        )
    }
}

export default DaysPage