"use client";
import { Button } from "@/components/ui/button";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import { pdfjs } from "react-pdf";
import { UploadButton } from "@uploadthing/react";
import { OurFileRouter } from "@/app/api/uploadthing/core";
import getFiles from "@/services/getfiles";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PdfComp from "@/components/PdfReader";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Loader from "@/components/Loader";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

interface UploadFileResponse {
  name: string;
  url: string;
}
export default function Files() {
  const [fileName, setFileName] = useState("");
  const [pdfFile, setPdfFile] = useState<string>("");
  const [iseditorOpen, setIsEditorOpen] = useState(false);
  const [isUploading, setIsUpLoading] = useState(false);
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();
  const router = useRouter();
  const { toast } = useToast();
  // console.log(message);

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
        toast({
          title: req.data.message,
          description: "Here You Go🚀",
          duration: 5000,
        });
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
        setIsUpLoading(false);
        toast({
          title: res.data.message,
          description: "Here You Go🚀",
          duration: 5000,
        });
      } else {
        setIsUpLoading(false);
        toast({
          title: "Unbale to delete the file",
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

  return (
    <section className=" bg-[url('/assets/dr15.jpg')] dark:bg-[url('/dr17.jpg')] bg-cover bg-bottom dark:sm:bg-center relative min-h-screen max-w-full">
      <NavBar />
      <div className="pt-16 min-h-screen w-full">
        <div className="flex justify-end px-12 py-8">
          {!isUploading && (
            <Card className="px-4 py-2 flex gap-3 items-center bg-green-500">
              <PlusCircle className="h-6 w-6" />
              <UploadButton<OurFileRouter>
                endpoint="pdfUploader"
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
                    setIsUpLoading(false);
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
            </Card>
          )}
        </div>

        {allfiles?.length === 0 && (
          <Alert className="max-w-md mx-auto text-center">
            <AlertTitle className="mb-4">Your Folder Is Empty</AlertTitle>
            <AlertDescription className="text-sm">
              Please Upload File To Edit
            </AlertDescription>
          </Alert>
        )}
        <div className="max-w-6xl px-6 pb-6 flex justify-center flex-wrap h-auto gap-6 w-full mx-auto">
          {!isLoading &&
            allfiles?.map((item: any, i: any) => (
              <Card className=" w-[16rem] " key={i}>
                <CardHeader className="text-center">{item.file}</CardHeader>
                <CardContent className="flex justify-center w-full gap-3">
                  <Button onClick={() => showPdf(item)} className="w-full">
                    Edit
                  </Button>
                  <Button
                    onClick={() => deleteHandler(item)}
                    className="w-full"
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {iseditorOpen && (
        <div className="absolute z-[60]   inset-0 w-full h-full  min-h-screen backdrop-blur-md ">
          <PdfComp
            setIsEditorOpen={setIsEditorOpen}
            fileName={fileName}
            file={pdfFile}
          />
        </div>
      )}

      {isUploading && <Loader message={message} />}
    </section>
  );
}
