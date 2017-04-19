import React from 'react';

class GettingStartedPage extends React.Component {
    render() {
        return (
          <div>
              <form>
                  <label htmlFor="nameInput">Naam</label>
                  <input id="nameInput" type="text"/>
                  <label htmlFor="nameInput">E-mail adres</label>
                  <input id="nameInput" type="email"/>
                  <input type="submit" value="Volgende"/>
              </form>
          </div>
        );
    }
}