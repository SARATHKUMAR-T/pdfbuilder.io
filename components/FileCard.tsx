import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Loader2 } from "lucide-react";
interface FileCardProps {
  item: any;
  showPdf: (item: any) => void;
  deleteHandler: (item: any) => void;
}

export default function FileCard({
  item,
  showPdf,
  deleteHandler,
}: FileCardProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Card
      key={item._id}
      className="p-2 w-[16rem] h-[14rem] flex flex-col bg-[url('/assets/ftuy.jpg')] bg-cover bg-center text-black bg-no-repeat"
    >
      <CardHeader className="h-[1/2] flex-1 font-semibold text-clip text-center">
        {item.file}
      </CardHeader>
      <CardContent className="h-[1/2] flex-1 flex flex-col justify-center w-full gap-3">
        <Button onClick={() => showPdf(item)} className="w-full">
          Edit
        </Button>
        <Button
          onClick={() => {
            setIsDeleting(true);
            deleteHandler(item);
          }}
          className="w-full"
          disabled={isDeleting}
          variant="outline"
        >
          {isDeleting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              <span>Deleting...</span>
            </>
          ) : (
            <span>Delete</span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
