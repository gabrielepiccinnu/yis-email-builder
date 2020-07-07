import React, { useRef, Component } from 'react';
import { render } from 'react-dom'

import EmailEditor from 'react-email-editor';

const App = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onLoad = () => {
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      
      <EmailEditor
        ref={emailEditorRef}
        onLoad={onLoad}
      />
    </div>
  );
};

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

              <EmailEditor
        //ref={emailEditorRef}
        onLoad={this.onLoad}
      />
            </div>
        );
      }
    }
    export default Emailbuilder;