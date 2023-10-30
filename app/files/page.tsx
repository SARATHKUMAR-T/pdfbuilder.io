"use client";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { PlusCircle, PlusCircleIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
// import { getStreaks } from "@/lib/services/streaks";
// import StreakCard from "@/components/StreakCard";
// import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import { pdfjs } from "react-pdf";
import getFiles from "@/services/getfiles";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FileForm from "@/components/UploadForm";
import PdfComp from "@/components/PdfReader";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Files() {
  const [file, setFile] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  console.log(pdfFile, "pdffile");

  const showPdf = async (pdf: any) => {
    console.log("edit triggered");
    setPdfFile(`http://localhost:9000/files/${pdf}`);
  };

  const router = useRouter();
  useEffect(() => {
    function token() {
      if (!localStorage.getItem("token")) {
        router.push("/");
      }
    }
    token();
  }, [router]);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["getfiles"],
    queryFn: getFiles,
  });
  const allfiles = data?.data.pdf;
  console.log(allfiles, "allfiles");

  return (
    <section className=" min-h-screen max-w-full">
      <NavBar />
      {isFormOpen ? (
        <div className="w-full h-full  min-h-screen backdrop-blur-md flex items-center justify-center">
          <FileForm
            file={file}
            setFile={setFile}
            setIsFormOpen={setIsFormOpen}
            isFormOpen={isFormOpen}
          />
        </div>
      ) : (
        <div className="pt-16 min-h-screen w-full">
          <div className="flex justify-end px-12 py-8">
            <Button
              variant="default"
              onClick={() => setIsFormOpen(!isFormOpen)}
            >
              <>
                <PlusCircleIcon className="mr-2" />
                Upload a File
              </>
            </Button>
          </div>
          <div className="max-w-6xl px-6 pb-6 flex flex-wrap h-auto gap-6 w-full mx-auto">
            {!isLoading &&
              allfiles?.map((item: any, i: any) => (
                <Card className=" w-[16rem] " key={i}>
                  <CardHeader className="text-center">{item.pdf}</CardHeader>
                  <CardContent className="flex justify-center w-full gap-3">
                    <Button
                      onClick={() => showPdf(item.pdf)}
                      className="w-full"
                    >
                      Edit
                    </Button>
                    <Button className="w-full" variant="destructive">
                      Delete
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      )}
      <PdfComp file={pdfFile} />
    </section>
  );
}
