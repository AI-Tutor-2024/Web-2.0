import { PostPracticeProps } from "@/app/types/note/question";
import { baseURL } from "..";

export const postPractice = async ({
  createPracticeReq,
  file,
}: PostPracticeProps) => {
  const formData = new FormData();

  formData.append("createPracticeReq", JSON.stringify(createPracticeReq));

  formData.append("file", file);

  console.log(file, "file");

  const response = await fetch(baseURL + "api/v1/professor/practice", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to create folder");
  }

  return response.json();
};
