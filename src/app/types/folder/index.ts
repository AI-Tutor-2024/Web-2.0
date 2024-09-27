export interface FolderListData {
  folderId: number;
  folderName: string;
  professor: string;
}

export interface FolderListResponse {
  information: FolderListData[];
}

export interface PostFolderProps {
  folderName: string;
  professorName: string;
}
