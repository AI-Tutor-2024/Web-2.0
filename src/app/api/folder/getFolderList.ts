import { baseURL } from "..";

export const getFolderList = async () => {
  const response = await fetch(baseURL + "api/v1/folder/");
  return response.json();
};
