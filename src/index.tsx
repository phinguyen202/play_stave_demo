import ReactDOM from 'react-dom';
import React from 'react';
import { Synth } from '../node_modules/tone/build/esm/instrument/Synth';
import verovio from 'verovio';
import mei from '../../svg-sheet-music/dev/sample/doc_starts_with_music.mei';

class RootTest extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.test = this.test.bind(this);

        verovio.module.onRuntimeInitialized = function () {
            /* create the toolkit instance */
            var vrvToolkit = new verovio.toolkit();
            // fetch("https://www.verovio.org/examples/downloads/Schubert_Lindenbaum.mei")
            //     .then((response) => response.text())
            //     .then((meiXML) => {
                    let svg = vrvToolkit.renderData(mei, {});
                    document.getElementById("notation").innerHTML = svg;
                // });
        }
    }

    private async test(event: React.MouseEvent): Promise<any> {
        const synth = new Synth().toDestination();
        await synth.context.resume();
        synth.triggerAttackRelease("C4", "8n");
    }

    render() {
        return (
            <>
            <div>
                <button onClick={this.test}>play audio</button>
            </div>
            <div id="notation"></div>
            </>
        )
    }
}

ReactDOM.render(<RootTest content='This is content' />, document.getElementById('react-div'));