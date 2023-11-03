import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter
export const ourFileRouter = {
  // FileRoute for PDF files
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } }).onUploadComplete(
    ({ file }) => {
      // confimation for successfull upload
      console.log("PDF upload complete");
    }
  ),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
