"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import { pdfjs } from "react-pdf";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import getFiles from "@/services/getfiles";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Loader from "@/components/Loader";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import PdfEditor from "@/components/PdfReader";
import "@uploadthing/react/styles.css";
import FileCard from "@/components/FileCard";
import { SkeletonCard } from "@/components/SkeletonCard";

// react pdf initializer
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

interface UploadFileResponse {
  name: string;
  url: string;
}

export default function Files() {
  const [fileName, setFileName] = useState<string>("");
  const [pdfFile, setPdfFile] = useState<string>("");
  const [iseditorOpen, setIsEditorOpen] = useState(false);
  const [isUploading, setIsUpLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState<string>("");
  const queryClient = useQueryClient();
  const router = useRouter();
  const { toast } = useToast();

  // Route Protection
  useEffect(() => {
    function checkToken() {
      if (!localStorage.getItem("token")) {
        router.push("/");
      }
    }
    checkToken();
  }, [router]);

  // Pdf editor Trigger
  const showPdf = async (pdf: any) => {
    setIsEditorOpen(true);
    setFileName(pdf.file);
    setPdfFile(pdf.fileUrl);
  };

  // fetching data from the server
  const { data, isLoading } = useQuery({
    queryKey: ["getfiles"],
    queryFn: getFiles,
  });
  const allfiles = data?.data.pdf;

  // Uploading to the backend
  async function serverHandler(fileDetails: any) {
    try {
      const req = await axios.post(
        "https://pdf-backend-one.vercel.app/api/upload-files",
        fileDetails,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      if (req.data.message == "File uploaded successfully") {
        queryClient.invalidateQueries({ queryKey: ["getfiles"] });
        setIsUpLoading(false);
        // toast({
        //   title: req.data.message,
        //   description: "Here You Go🚀",
        //   duration: 5000,
        // });
      } else {
        setIsUpLoading(false);
        toast({
          title: "Unbale to process the file",
          description: "Please Try Again",
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsUpLoading(false);
      toast({
        title: "Unknow error happened",
        description: "Please Try Again",
        variant: "destructive",
      });
      console.log(error);
    }
  }

  // delete handler
  async function deleteHandler(item: any) {
    try {
      setIsDeleting(true);
      const res = await axios.delete(
        `https://pdf-backend-one.vercel.app/api/delete-file/${item._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );

      if (res.data.message == "File Deleted Successfully!") {
        queryClient.invalidateQueries({ queryKey: ["getfiles"] });
        setIsDeleting(false);
        toast({
          title: res.data.message,
          description: "Here You Go🚀",
          duration: 5000,
        });
      } else {
        setIsDeleting(false);
        toast({
          title: "Unbale to delete the file",
          description: "Please Try Again",
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsDeleting(false);
      toast({
        title: "Unknow error happened",
        description: "Please Try Again",
        variant: "destructive",
      });
      console.log(error);
    }
  }

  return (
    <section className=" bg-[url('/assets/dr15.jpg')] dark:bg-[url('/dr17.jpg')] bg-cover bg-bottom dark:sm:bg-center relative min-h-screen max-w-full">
      <NavBar />
      <div className="pt-16 min-h-screen w-full">
        <div className="flex justify-end px-12 py-8">
          {/* uploading the document to DB */}
          {isUploading ? (
            <Loader message={message} />
          ) : (
            <UploadButton<OurFileRouter>
              endpoint="pdfUploader"
              appearance={{
                button:
                  "bg-green-500 ut-ready:bg-green-500 ut-uploading:cursor-not-allowed rounded-r-none  bg-none after:bg-orange-400",
                container:
                  "w-max flex-col rounded-md border-cyan-300 bg-slate-800",
                allowedContent:
                  "hidden h-8 flex-col items-center justify-center px-2 text-white",
              }}
              className="mt-4 ut-button:bg-green-500 "
              onClientUploadComplete={(
                res: UploadFileResponse[] | undefined
              ) => {
                setMessage("Uploading Completed,Storing Data On the Cloud");
                if (res && res.length > 0) {
                  const { name, url } = res[0];
                  const details = {
                    file: name,
                    fileUrl: url,
                  };
                  serverHandler(details);
                }
              }}
              onUploadError={(error: Error) => {
                setMessage("Unable to upload...Please Try Again Sometime...");
                setIsUpLoading(false);
                alert(`ERROR! ${error.message}`);
              }}
              onUploadBegin={name => {
                setIsUpLoading(true);
                setMessage("Uploading Started...It Takes Some Time");
              }}
            />
          )}
        </div>

        <div className="max-w-6xl px-6 pb-6 flex justify-center flex-wrap h-auto gap-6 w-full mx-auto">
          {isLoading && <SkeletonCard />}
          {/* rendering lists of files with the use of map */}
          {allfiles?.length === 0 ? (
            <Alert className="max-w-md mx-auto text-center">
              <AlertTitle className="mb-4">Your Folder Is Empty</AlertTitle>
              <AlertDescription className="text-sm">
                Please Upload File To Edit
              </AlertDescription>
            </Alert>
          ) : (
            allfiles?.map((item: any) => (
              <FileCard
                key={item._id}
                showPdf={showPdf}
                deleteHandler={deleteHandler}
                item={item}
              />
            ))
          )}
        </div>
      </div>
      {/* pdf editor component logic */}
      {iseditorOpen && (
        <div className="absolute z-[60]   inset-0 w-full h-full  min-h-screen backdrop-blur-md ">
          <PdfEditor
            setIsEditorOpen={setIsEditorOpen}
            fileName={fileName}
            file={pdfFile}
          />
        </div>
      )}
    </section>
  );
}
