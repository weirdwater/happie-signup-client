import React from 'react'
import styles from './PageControls.css'

class PageControls extends React.Component {
    render() {
        const {nextPage, previousPage, className, ...props} = this.props;

        const containerClass = [className, styles.container].join(' ');

        return (
            <div className={containerClass}>
                <button className={styles.previous} onClick={previousPage} type="button">Vorige</button>
                <span className={styles.progress}>0/5</span>
                <button className={styles.next} onClick={nextPage} type="button">Volgende</button>
            </div>
        );
    }
}

export default PageControls;