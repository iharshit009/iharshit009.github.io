import React, { Component } from 'react';
import { BlogsStructure } from "../../components/styled"
import { Document, Page } from 'react-pdf';
import gsoc from '../../static/projects/gsoc.pdf'
export default class Gsoc extends Component {
    state = {
        numPages: 2,
        pageNumber: 1,
    }
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <BlogsStructure>
                <div style={{ width: '80%' }}>
                    <Document
                        file={gsoc}
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                </div>
            </BlogsStructure>
        );
    }
}
