import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Create a new FileRoute for PDF files with no middleware or authentication
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } }).onUploadComplete(
    ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("PDF upload complete");
    }
  ),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
