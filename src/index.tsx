import ReactDOM from 'react-dom';
import React from 'react';

class RootTest extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>{this.props.content}</h1>
                <h2>Test react</h2>
            </div>
        )
    }
}

ReactDOM.render(<RootTest content='This is content' />, document.getElementById('react-div'));