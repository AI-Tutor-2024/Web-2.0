import { PostFolderProps } from "@/app/types/folder";
import { baseURL } from "..";

export const getFolderList = async () => {
  const response = await fetch(baseURL + "api/v1/folder/");
  return response.json();
};

export const postFolder = async ({
  folderName,
  professorName,
}: PostFolderProps) => {
  const response = await fetch(baseURL + "api/v1/folder/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      folderName: folderName,
      professorName: professorName,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create folder");
  }

  return response.json();
};

export const deleteFolder = async (folderId: number) => {
  const response = await fetch(baseURL + "api/v1/folder/" + folderId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to create folder");
  }

  return response.json();
};
