import { Loader2, X } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function FileForm({
  setIsFormOpen,
  setFile,
  file,
  isFormOpen,
}: {
  setIsFormOpen: any;
  isFormOpen: boolean;
  file: any;
  setFile: any;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const req = await axios.post(
        "http://localhost:9000/api/upload-files",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": token,
          },
        }
      );
      console.log(req);
    } catch (error) {
      console.log(error);
    }
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
                onChange={e => setFile(e.target.files[0])}
                accept="application/pdf"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
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
