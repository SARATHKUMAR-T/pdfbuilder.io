"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "@/components/PdfReader";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function App() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  //   useEffect(() => {
  //     getPdf();
  //   }, []);
  //   const getPdf = async () => {
  //     const result = await axios.get("http://localhost:9000/get-files");
  //     console.log(result.data.data);
  //     setAllImage(result.data.data);
  //   };

  const submitImage = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const result = await axios.post(
      "http://localhost:5000/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };
  const showPdf = () => {
    // window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
    setPdfFile(`http://localhost:9000/files/mern-syllabus.pdf`);
  };
  return (
    <div className="App">
      <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Pdf in React</h4>
        <input
          type="file"
          accept="application/pdf"
          required
          onChange={e => setFile(e.target.files[0])}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div className="uploaded">
        <h4>Uploaded PDF:</h4>

        <button className="btn btn-primary" onClick={() => showPdf()}>
          Show Pdf
        </button>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data: any, i: any) => {
                return (
                  <div key={i} className="inner-div">
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
      <PdfComp pdfFile={pdfFile} />
    </div>
  );
}

export default App;
