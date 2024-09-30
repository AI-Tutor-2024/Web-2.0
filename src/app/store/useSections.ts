import { create } from "zustand";
import { FolderListData } from "../types/folder";

interface SectionsProps {
  sections: FolderListData[];
  setSections: (newSections: FolderListData[]) => void;
}

const useSections = create<SectionsProps>((set) => ({
  sections: [],

  setSections: (newSections: FolderListData[]) =>
    set(() => ({ sections: newSections })),
}));

export default useSections;
