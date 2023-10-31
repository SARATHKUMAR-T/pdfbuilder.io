import {
  ChevronLeftCircleIcon,
  ChevronRightCircleIcon,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { Button } from "./ui/button";
import Link from "next/link";
import { Card } from "./ui/card";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function PdfComp(props: any) {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [asideOpen, setAsideOpen] = useState(true);
  console.log(numPages);

  function onDocumentLoadSuccess({ numPages }: any) {
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

  return (
    <div
      className={`${
        asideOpen ? "grid-cols-[19rem,auto]" : "grid-cols-1"
      } relative bg-slate-200 min-h-screen grid grid-rows-[58px,auto]`}
    >
      <nav className="bg-gray-800 px-6 text-white drop-shadow-2xl items-center flex justify-between  shadow-xl col-span-2">
        <div className="pl-2 flex items-center gap-3">
          <button onClick={() => setAsideOpen(!asideOpen)}>
            <Menu />
          </button>
          <p className="text-sm font-semibold">{props.fileName}</p>
        </div>
        <p className="text-sm font-semibold">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button
          className="border-2 border-transparent duration-300  hover:border-green-500 rounded-full "
          onClick={() => props.setIsEditorOpen(false)}
        >
          <X className="h-6 w-6" />
        </button>
      </nav>
      {asideOpen && (
        <div className="bg-slate-800 flex flex-col gap-2 items-center  p-4">
          <h4>Select pages to Edit</h4>
          <div className="mt-3">
            {numPages > 0 && (
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
                    <div className="absolute hover:bg-black/70 duration-300 hover:ring-4 cursor-pointer  ring-green-500 bg-black/25 inset-0 flex items-center justify-center ">
                      <p className="text-green-500">{index + 1}</p>
                    </div>
                  </Page>
                ))}
              </Document>
            )}
          </div>
        </div>
      )}
      <div className="h-full w-full max-w-full bg-zinc-600 p-4 flex gap-4  items-center justify-center">
        <Button disabled={pageNumber <= 1} onClick={previousPage}>
          <ChevronLeftCircleIcon className="h-8 w-8 text-black" />
        </Button>
        <Document file={props.file} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>

        <Button
          className="p-4"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          <ChevronRightCircleIcon className="h-8 w-8  text-black" />
        </Button>
      </div>
    </div>
  );
}
export default PdfComp;
