import React from 'react'

class PageControls extends React.Component {
    render() {
        return (
            <div>
                <button type="button">Vorige</button>
                <span>0/5</span>
                <button onClick={this.props.nextAction} type="button">Volgende</button>
            </div>
        );
    }
}

export default PageControls;