import axios from "axios";

export default async function getFiles() {
  const token = localStorage.getItem("token");
  const data = axios
    .get("http://localhost:9000/api/get-files", {
      headers: {
        "x-auth-token": token,
      },
    })
    .catch(error => {
      throw error;
    });

  return data;
}
