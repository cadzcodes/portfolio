import React, { useState } from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import {Download, Plus, Minus} from "lucide-react";
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [scale, setScale] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleZoomIn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setScale(prev => Math.min(prev + 0.2, 2));
    };

    const handleZoomOut = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setScale(prev => Math.max(prev - 0.2, 0.5));
    };

    const handleDownload = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume"/>
                <h2>Resume.pdf</h2>

                <div className="flex items-center gap-2 pointer-events-auto">
                    <button onPointerDown={handleZoomOut} onClick={handleZoomOut} className="cursor-pointer hover:bg-gray-200 p-1 rounded" title="Zoom out">
                        <Minus className="w-4 h-4"/>
                    </button>
                    <span className="text-xs w-10 text-center">{Math.round(scale * 100)}%</span>
                    <button onPointerDown={handleZoomIn} onClick={handleZoomIn} className="cursor-pointer hover:bg-gray-200 p-1 rounded" title="Zoom in">
                        <Plus className="w-4 h-4"/>
                    </button>
                </div>

                <a href="files/resume.pdf" download onPointerDown={handleDownload} className="cursor-pointer pointer-events-auto" title="Resume.pdf">
                    <Download className="icon"/>
                </a>
            </div>

            <div className="resume-scroll" style={{ height: 'calc(70vh - 3rem)', overflow: 'auto' }}>
                <Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    {numPages && Array.from(new Array(numPages), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            scale={scale}
                            className="pdf-page"
                            renderTextLayer
                            renderAnnotationLayer
                        />
                    ))}
                </Document>
            </div>
        </>
    )
}
const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
