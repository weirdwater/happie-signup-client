import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.renderInput = this.renderInput.bind(this);
    }

    handleInputChange(event) {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        const name = input.name;
        console.log({name, value});

        this.props.handleFormChange({[name]: value});

    }

    renderInput({label, ...props}) {

        const inputArgs = {
            onChange: this.handleInputChange,
            value: this.props.formState[props.name],
            ...props
        };

        const input = props.type === 'textarea'
            ? (<textarea {...inputArgs}></textarea>)
            : <input {...inputArgs} />;

        return (
            <label key={props.name}>
                { props.type === 'checkbox' ? input : ''}
                {label}
                { props.type !== 'checkbox' ? input : ''}
            </label>
        )
    }

    render() {
        const {fields, className} = this.props;
        return(
            <form className={className} >
                { fields.map(this.renderInput) }
            </form>
        );
    }
}

export default Form