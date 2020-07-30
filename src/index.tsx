import ReactDOM from 'react-dom';
import React from 'react';
import { Synth } from '../node_modules/tone/build/esm/instrument/Synth';

class RootTest extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.test = this.test.bind(this);
    }

    private test(event: React.MouseEvent): void {
        const synth = new Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");
    }

    render() {
        return (
            <div>
                <button onClick={this.test}>play audio</button>
            </div>
        )
    }
}

ReactDOM.render(<RootTest content='This is content' />, document.getElementById('react-div'));