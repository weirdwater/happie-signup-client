import React from 'react'
import FormPage from "./FormPage";

class PositionPage extends React.Component {

    constructor(props) {
        super(props)

        this.handleFormSubmit = this.handleFormSubmit.bind(this)

        this.fields = [
            {
                name: 'barShift',
                type: 'checkbox',
                label: 'Bar',
                disabled: !this.props.formState.hasTapLicense
            },
            {
                name: 'bedieningShift1',
                type: 'checkbox',
                label: 'Bediening shift 1',
            },
            {
                name: 'bedieningShift2',
                type: 'checkbox',
                label: 'Bediening shift 2',
            },
            {
                name: 'keukenShift1',
                type: 'checkbox',
                label: 'Keuken shift 1',
            },
            {
                name: 'keukenShift2',
                type: 'checkbox',
                label: 'Keuken shift 2',
            },
            {
                name: 'spoelShift',
                type: 'checkbox',
                label: 'Spoelkeuken',
            }
        ]
    }

    handleFormSubmit(formState) {
        const position = []
        this.fields.forEach(field => {
            if (formState[field.name] || false) {
                position.push(field.name)
            }
        })

        this.props.submitFormState({position})
    }

    render() {


        return (
            <FormPage {...this.props}  fields={this.fields} submitFormState={this.handleFormSubmit}>
                <h1>Posities</h1>
                <ul>
                    <li><strong>Bediening shift 1</strong> 17:30 - 22:00</li>
                    <li><strong>Bediening shift 2</strong> 18:30 - sluit</li>
                    <li><strong>Bar<sup>*</sup></strong> 17:30 - sluit</li>
                    <li><strong>Keuken shift 1</strong> 15:30 - 20:00</li>
                    <li><strong>Keuken shift 2</strong> 19:45 - sluit</li>
                    <li><strong>Spoelkeuken</strong> 18:30 - sluit</li>
                </ul>
                <sup>*</sup>Alleen in combinatie met tap vergunning.
            </FormPage>
        );
    }
}

export default PositionPage