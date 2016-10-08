import React, { PropTypes } from 'react'

class AnotherComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>This is another component being 
                rendered in our single page app</h1>
            </div>
        )
    }
}

export default AnotherComponent;