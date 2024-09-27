import { getFolderList } from "@/app/api/folder";
import { FolderListResponse } from "@/app/types/folder";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

export function useFolders(): UseSuspenseQueryResult<
  FolderListResponse,
  Error
> {
  const QUERY_KEY = "FolderList";
  return useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getFolderList(),
  });
}
