"use client";
import { Loader2, X } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useUploadThing } from "@/components/uploadthing";

export default function FileForm({
  setIsFormOpen,
  setFiles,
  files,
  isFormOpen,
}: {
  setIsFormOpen: any;
  isFormOpen: boolean;
  files: any;
  setFiles: any;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // upload thing logics

  const { isUploading, startUpload, permittedFileInfo } = useUploadThing(
    "pdfUploader",
    {
      onClientUploadComplete: res => {
        console.log(res);
        alert("uploaded successfully!");
      },
      onUploadError: error => {
        console.log(error);
        alert("error occurred while uploading");
      },
      onUploadBegin: () => {
        alert("upload has begun");
      },
    }
  );

  const fileTypes = permittedFileInfo?.config
    ? Object.keys(permittedFileInfo?.config)
    : [];

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("file", file);
    startUpload(files);

    // try {
    //   const req = await axios.post(
    //     "http://localhost:9000/api/upload-files",
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         "x-auth-token": token,
    //       },
    //     }
    //   );
    //   if (req.data.message == "File uploaded successfully") {
    //     setIsLoading(false);
    //     queryClient.invalidateQueries({ queryKey: ["getfiles"] });

    //     setIsFormOpen(false);
    //     toast({
    //       title: req.data.message,
    //       description: "Here You Go🚀",
    //       duration: 5000,
    //     });
    //   } else {
    //     setIsLoading(false);
    //     toast({
    //       title: "Unbale to process the file",
    //       description: "Please Try Again",
    //       variant: "destructive",
    //     });
    //   }
    // } catch (error) {
    //   setIsLoading(false);
    //   toast({
    //     title: "Unknow error happened",
    //     description: "Please Try Again",
    //     variant: "destructive",
    //   });
    //   console.log(error);
    // }
  }

  return (
    <Card className="max-w-sm relative">
      <X
        className="absolute right-4 top-4 z-20 cursor-pointer"
        onClick={() => {
          setIsFormOpen(!isFormOpen);
        }}
      />
      <CardHeader className="text-center">Please select your file</CardHeader>
      <CardContent>
        <form onSubmit={e => handleSubmit(e)} className="space-y-8">
          <div className="space-y-8">
            <div>
              <Input
                type="file"
                title="file"
                required
                className="cursor-pointer"
                onChange={e => setFiles(e.target.files)}
                accept="application/pdf"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isUploading}>
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                <span>Uploading...</span>
              </>
            ) : (
              <span>Upload</span>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
