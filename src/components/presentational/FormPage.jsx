import React from 'react';
import styles from './FormPage.css';
import PageControls from './PageControls';
import Form from './Form';

class FormPage extends React.Component {

    constructor(props) {
        super(props);

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getField = this.getField.bind(this);
        this.fieldIsValid = this.fieldIsValid.bind(this);
        this.pageIsValid = this.pageIsValid.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);

        const emptyValues = this.props.fields.reduce((fieldNames, field) => Object.assign({}, fieldNames, {[field.name]: ''}), {});

        this.state = {
            validFields: {},
            formState: this.props.formState
        };

    }

    componentWillMount() {
        const {validFields, formState} = this.state;
        this.props.fields.map(field => {
            const name = field.name;
            const value = formState[name];
            const isValid = this.fieldIsValid(field, value);
            validFields[name] = isValid;
            return field;
        });
        this.setState(validFields);
    }

    /**
     * Returns true if all fields are set to true. False if one or more are set to false.
     * @returns {bool} all fields are valid.
     */
    pageIsValid() {
        const keys = Object.keys(this.state.validFields);
        const {validFields} = this.state;
        return keys.reduce(
            (previous, key) => validFields[key] ? previous : validFields[key],
            true
        )
    }

    /**
     * Checks if the value in the formstate is valid based on the provided field.
     * @param {object} field
     * @returns {boolean}
     */
    fieldIsValid(field, value) {
        // Field is required but value is empty
        if (field.required && (value === null || value === undefined || value === '')) {
            return false
        }
        // Value doesn't match pattern

        return true;
    }

    /**
     * Gets the field from the field list in the props with the matching name.
     * @param {string} fieldName
     * @returns {object} field
     */
    getField(fieldName) {
        const filteredFields = this.props.fields.filter(field => field.name === fieldName);
        return filteredFields[0];
    }

    handleFormChange(nextInputState) {

        // Validate input
        const name = Object.keys(nextInputState)[0];
        const value = nextInputState[name];
        const field = this.getField(name);
        const inputIsValid = this.fieldIsValid(field, value);
        const nextInputValidity = {[name]: inputIsValid};

        // Create next validFields
        const previousValidFields = this.state.validFields;
        const validFields = Object.assign({}, previousValidFields, nextInputValidity);

        // Create next formState
        const previousFormState = this.state.formState;
        const formState = Object.assign({}, previousFormState, nextInputState);

        this.setState({validFields, formState});
    }

    handleSubmit() {
        this.props.submitFormState(this.state.formState);
    }

    nextPage() {
        if (this.pageIsValid()) {
            this.handleSubmit();
            this.props.nextPage();
        }
    }

    previousPage() {
        this.handleSubmit();
        this.props.previousPage();
    }

    render() {
        const { fields, currentPage, totalPages, previousPage, ...props } = this.props;

        return (
            <div className={styles.container}>
                <section className={styles.description}>
                    {this.props.children}
                </section>
                <PageControls currentPage={currentPage} totalPages={totalPages} previousPage={this.previousPage} nextPage={this.nextPage} allowToContinue={this.pageIsValid()} className={styles.controls} />
                <Form className={styles.form} handleFormChange={this.handleFormChange} fields={this.props.fields} formState={this.state.formState} />
            </div>
        )
    }
}

export default FormPage;