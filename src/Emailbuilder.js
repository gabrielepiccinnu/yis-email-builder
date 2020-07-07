import React, { useRef, Component } from 'react';
//import { render } from 'react-dom'

import EmailEditor from 'react-email-editor';

class Emailbuilder extends Component {
 

    exportHtml = () => {
        /*   emailEditorRef.current.editor.exportHtml((data) => {
             const { design, html } = data;
             console.log('exportHtml', html);
           });*/
    };

    onLoad = () => {
        // you can load your template here;
        // const templateJson = {};
        // emailEditorRef.current.editor.loadDesign(templateJson);
    };

    render() {
        return (
            <div>
                <h2>Email Builder</h2>
                <button onClick={this.saveDesign}>Save Design</button>
                <button onClick={this.exportHtml}>Export HTML</button>

                <EmailEditor
                    minHeight='800px'    
                    locale='it'
                    ref={editor => this.editor = editor}
                    onLoad={this.onLoad}
                />
            </div>
        );
    }
    saveDesign = () => {
        this.editor.saveDesign(design => {
            console.log('saveDesign', design);
            alert('Il Design JSON è in console.');

        })
    }

    exportHtml = () => {
        this.editor.exportHtml(data => {
            const { design, html } = data
            console.log('exportHtml', html);
            alert('L\'output HTML è stato copiato negli appunti.');

        })
    }

    onLoad = () => {
        //const json = 'design'
         //   this.editor.loadDesign(json)
    }
}
export default Emailbuilder;