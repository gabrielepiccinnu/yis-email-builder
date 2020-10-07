import React, { useRef, Component } from 'react';
//import { render } from 'react-dom'

import EmailEditor from 'react-email-editor';


import yisTemplate from './templates/yis-template-it-25092020.json';


//import Button from 'react-bootstrap/Button';
import { Button,Accordion,Card } from 'react-bootstrap';


//import ReactDOM from 'react-dom';
//import {CopyToClipboard} from 'react-copy-to-clipboard';

 

class Emailbuilder extends Component {
 

    exportHtml = () => {
        /*   emailEditorRef.current.editor.exportHtml((data) => {
             const { design, html } = data;
             console.log('exportHtml', html);
           });*/
    };

    onLoad = () => {
      //  this.editor.loadDesign(yisTemplate);
      //  console.log('TemplateDesign', yisTemplate);
        // you can load your template here;
        // const templateJson = {};
        // emailEditorRef.current.editor.loadDesign(templateJson);
    };

    render() {
        return (
            <div className="container-fluid">
                <button onClick={this.saveDesign} className="btn btn-primary mr-3">Esporta Design</button>
                <button onClick={this.exportHtml} className="btn btn-primary">Esporta HTML</button>
                <button onClick={this.downloadJsonFile} className="btn btn-primary d-none">Scarica file design .json</button>
                <div class="form-group">
                   <label for=""></label>
                    <textarea class="form-control" name="" id="jsoncode" rows="3"></textarea>
                    </div>
                                  

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
           // copy(JSON.stringify(design));
            var designjson = JSON.stringify(design, null, 4)

            document.getElementById('jsoncode').value = designjson
            //prompt("Copia il codice JSON contenuto nel seguente campo testo", JSON.stringify(design));
            //alert('Il Design JSON è in console.');

        })
    }


    
    exportHtml = () => {
        this.editor.exportHtml(data => {
            const { design, html } = data
            console.log('exportHtml', html);
            prompt("Copia il codice HTML contenuto nel seguente campo testo", html);
            //alert('L\'output HTML è stato copiato negli appunti.');

        })
    }


    onLoad = () => {

        this.editor.loadDesign(yisTemplate);
        console.log('TemplateDesign', yisTemplate);

        const json = {"counters": {
                "u_column": 1,
                "u_row": 1
            },
            "body": {
                "rows": [
                    {
                        "cells": [
                            1
                        ],
                        "columns": [
                            {
                                "contents": [],
                                "values": {
                                    "backgroundColor": "",
                                    "padding": "0px",
                                    "border": {},
                                    "_meta": {
                                        "htmlID": "u_column_1",
                                        "htmlClassNames": "u_column"
                                    }
                                }
                            }
                        ],
                        "values": {
                            "columns": false,
                            "backgroundColor": "",
                            "columnsBackgroundColor": "",
                            "backgroundImage": {
                                "url": "",
                                "fullWidth": true,
                                "repeat": false,
                                "center": true,
                                "cover": false
                            },
                            "padding": "0px",
                            "hideDesktop": false,
                            "hideMobile": false,
                            "noStackMobile": false,
                            "_meta": {
                                "htmlID": "u_row_1",
                                "htmlClassNames": "u_row"
                            },
                            "selectable": true,
                            "draggable": true,
                            "duplicatable": true,
                            "deletable": true
                        }
                    }
                ],
                "values": {
                    "backgroundColor": "#ffffff",
                    "backgroundImage": {
                        "url": "",
                        "fullWidth": true,
                        "repeat": false,
                        "center": true,
                        "cover": false
                    },
                    "contentWidth": "600px",
                    "fontFamily": {
                        "label": "Arial",
                        "value": "arial,helvetica,sans-serif"
                    },
                    "linkStyle": {
                        "body": true,
                        "inherit": false,
                        "linkColor": "#ff9933",
                        "linkUnderline": true,
                        "linkHoverColor": "#0000ee",
                        "linkHoverUnderline": true
                    },
                    "_meta": {
                        "htmlID": "u_body",
                        "htmlClassNames": "u_body"
                    }
                }
            },
            "schemaVersion": 4
        }
           // this.editor.loadDesign(json)
    }
}
export default Emailbuilder;