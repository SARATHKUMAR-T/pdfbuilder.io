"use client";
import axios from "axios";

export default async function getFiles() {
  const token = localStorage.getItem("token");
  const data = axios
    .get("https://pdf-backend-one.vercel.app/api/get-files", {
      headers: {
        "x-auth-token": token,
      },
    })
    .catch(error => {
      throw error;
    });

  return data;
}
