"use client";
import { Webhook } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function Loader({ message }: any) {
  const [loadingMessage, setLoadingMessage] = useState(message);
  useEffect(() => {
    setLoadingMessage(message);
  }, [message]);
  return (
    <section className="absolute inset-0  bg-black/40 backdrop-blur-sm p-8  flex flex-col items-center justify-center">
      <Card>
        <CardHeader>
          <h3 className="text-center text-md font-semibold  mb-3">
            We are working on it.
            <br />
            {loadingMessage}
          </h3>
        </CardHeader>
        <CardContent className="text-center">
          <Webhook className="inline-block h-20 w-20 text-green-500 animate-[spin_2s_ease-in-out_infinite]" />
        </CardContent>
      </Card>
    </section>
  );
}
