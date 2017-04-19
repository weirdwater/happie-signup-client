import React from 'react'

class PageControls extends React.Component {
    render() {
        const {nextPage, previousPage, ...props} = this.props;
        return (
            <div>
                <button onClick={previousPage} type="button">Vorige</button>
                <span>0/5</span>
                <button onClick={nextPage} type="button">Volgende</button>
            </div>
        );
    }
}

export default PageControls;