import React from 'react';
import ReactDOM from 'react-dom';
import FormPage from './FormPage';

const initialState = {
    surnamePrefix: '',
    surname: '',
    wantsCalls: false,
    phonenumber: ''
}

const fields = [
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
];

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<FormPage formState={initialState} fields={fields} />, div);
});
