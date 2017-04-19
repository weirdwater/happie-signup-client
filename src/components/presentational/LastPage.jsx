import React from 'react';
import styles from './LastPage.css';

class LastPage extends React.Component {

    componentDidMount() {
        this.props.endForm();
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>Bedankt voor je aanmelding!</h1>
                <p>Binnenkort ontvang je een email om je beschikbaarheid in te vullen. Happietaria gaat van 8 mei tot 3 juni open.</p>
            </div>
        );
    }
}

export default LastPage;