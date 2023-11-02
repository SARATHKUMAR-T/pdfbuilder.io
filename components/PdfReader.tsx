"use client";
import {
  ChevronLeftCircleIcon,
  ChevronRightCircleIcon,
  DownloadIcon,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Button } from "./ui/button";
import { PDFDocument, degrees } from "pdf-lib";
import Loader from "./Loader";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

interface PdfCompProps {
  file: string;
  setIsEditorOpen: (value: boolean) => void;
  fileName: string;
}

async function generateSelectedPDF(
  inputPDFBuffer: any,
  selectedPageNumbers: any
) {
  const pdfDoc = await PDFDocument.load(inputPDFBuffer);
  const newPdfDoc = await PDFDocument.create();

  for (const pageNumber of selectedPageNumbers) {
    const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [pageNumber - 1]);
    copiedPage.setRotation(degrees(0)); // Reset the page rotation if needed
    newPdfDoc.addPage(copiedPage);
  }

  const pdfBytes = await newPdfDoc.save();

  return pdfBytes;
}

function PdfEditor(props: PdfCompProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [asideOpen, setAsideOpen] = useState(true);
  const [selectedPages, setSelectedPages] = useState<number[]>([]);
  const [pdfLoader, setPdfLoader] = useState<boolean>(false);

  async function handleDownload() {
    if (selectedPages.length > 0) {
      try {
        setPdfLoader(true);
        const response = await fetch(props.file);
        const pdfBuffer = await response.arrayBuffer();

        const newPdfBuffer = await generateSelectedPDF(
          pdfBuffer,
          selectedPages
        );

        const blob = new Blob([newPdfBuffer], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `edited${props.fileName}`;
        setTimeout(() => {
          setPdfLoader(false);
        }, 1000);
        a.click();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error generating or downloading the PDF:", error);
      }
    }
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: any) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function selectionHandler(page: number) {
    if (selectedPages.includes(page)) {
      const newpages = selectedPages.filter(item => item != page);
      setSelectedPages(newpages);
    } else {
      const pageAddition = [...selectedPages, page];
      setSelectedPages(pageAddition);
    }
  }

  return (
    <div
      className={`${
        asideOpen ? "grid-cols-[19rem,auto]" : "grid-cols-1"
      } relative bg-slate-800 max-h-screen grid grid-rows-[58px,auto] overflow-hidden`}
    >
      <nav className="bg-gray-800 px-6 text-white drop-shadow-2xl items-center flex  justify-between  shadow-xl col-span-2">
        <div className="pl-2 flex items-center gap-3">
          <button onClick={() => setAsideOpen(!asideOpen)}>
            <Menu />
          </button>
          <p className="hidden sm:block text-sm font-semibold">
            {props.fileName}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            className="p-1 sm:p-4"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            <ChevronLeftCircleIcon className="h-8 w-8 text-black" />
          </Button>
          <p className="text-sm font-semibold">
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <Button
            className="p-1 sm:p-4"
            disabled={pageNumber >= (numPages ?? 1)}
            onClick={nextPage}
          >
            <ChevronRightCircleIcon className="h-8 w-8  text-black" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          {selectedPages.length > 0 && (
            <Button
              className="hidden sm:flex"
              onClick={handleDownload}
              size="sm"
            >
              Download <DownloadIcon className="pl-2 " />
            </Button>
          )}
          <button
            className="border-2 border-transparent duration-300  hover:border-green-500 rounded-full "
            onClick={() => props.setIsEditorOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </nav>
      {asideOpen && (
        <div className="bg-slate-800 max-h-[120vh] h-full overflow-y-scroll flex flex-col gap-2 items-center  p-4">
          <h4 className="text-lg font-semibold tracking-wide capitalize text-white">
            Select pages to Edit
          </h4>
          <p className="block text-white sm:hidden text-sm font-semibold">
            {props.fileName}
          </p>

          <Button
            className="flex sm:hidden p-4"
            onClick={handleDownload}
            size="sm"
          >
            Download <DownloadIcon className="pl-2 " />
          </Button>

          <div className="mt-3 ">
            {numPages && (
              <Document file={props.file} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (el, index) => (
                  <Page
                    width={100}
                    className="mb-3 relative "
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  >
                    <div
                      className={`${
                        pageNumber === index + 1
                          ? "!bg-black/80 ring-inset ring-4 ring-green-500"
                          : ""
                      } absolute  flex-col gap-1  hover:bg-black/70 duration-300 hover:ring-4 cursor-pointer  ring-green-500 bg-black/25 inset-0 flex items-center justify-center `}
                    >
                      <p className="text-lg font-bold">{index + 1}</p>
                      <Button
                        variant={
                          selectedPages.includes(index + 1)
                            ? "destructive"
                            : "default"
                        }
                        onClick={() => selectionHandler(index + 1)}
                        size="sm"
                      >
                        {selectedPages.includes(index + 1) ? "undo" : "select"}
                      </Button>
                    </div>
                  </Page>
                ))}
              </Document>
            )}
          </div>
        </div>
      )}
      <div className="h-full w-full max-w-full  min-h-screen overflow-y-scroll bg-zinc-600 p-2 flex gap-4  items-center justify-center">
        <Document file={props.file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            height={700}
            width={500}
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      {pdfLoader && <Loader message="Your Downlaod Will Begin Shortly" />}
    </div>
  );
}
export default PdfEditor;
