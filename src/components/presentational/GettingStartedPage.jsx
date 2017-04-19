import React from 'react';
import LabeledInput from './LabeledInput';

class GettingStartedPage extends React.Component {
    render() {
        return (
          <div>
              <form>
                  <LabeledInput inputId="name" label="Name" placeholder="Mr Fantastic" />
                  <LabeledInput inputId="email" label="E-mail adres" placeholder="fantastic@awesome.com" />
                  <input type="submit" value="Volgende"/>
              </form>
          </div>
        );
    }
}

export default GettingStartedPage;