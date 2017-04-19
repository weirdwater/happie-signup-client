import React from 'react'
import styles from './PageControls.css'

class PageControls extends React.Component {
    render() {
        const {nextPage, previousPage, className, currentPage, totalPages, allowToContinue, ...props} = this.props;

        const containerClass = [className, styles.container].join(' ');

        return (
            <div className={containerClass}>
                <button className={styles.previous} onClick={previousPage} type="button">Vorige</button>
                <span className={styles.progress}>{currentPage + 1}/{totalPages}</span>
                <button className={styles.next} onClick={nextPage} type="button" disabled={!allowToContinue}>Volgende</button>
            </div>
        );
    }
}

export default PageControls;