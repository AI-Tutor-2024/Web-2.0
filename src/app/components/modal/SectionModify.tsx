"use client";
import { deleteFolder, patchFolder } from "@/app/api/folder";
import { FolderListData } from "@/app/types/folder";
import React, { useState } from "react";
import SectionModal from "./SectionModal";

interface SectionModifyProps {
  section: FolderListData;
  onDelete: () => void;
}

const SectionModify: React.FC<SectionModifyProps> = ({ section, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEditFolder = async (subject: string, professor: string) => {
    try {
      const folderData = {
        folderId: section.folderId,
        folderName: subject,
        professorName: professor,
      };

      console.log(folderData);

      const result = await patchFolder(folderData);
      console.log("Folder created successfully:", result);
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  };

  const handleDeleteFolder = async () => {
    await deleteFolder(section.folderId);
    onDelete();
  };

  return (
    <div className=" py-[12px] px-[15px] w-[180px] bg-[#343434] rounded-md">
      <button
        className="block font-Pretendard font-regular text-[15px] text-left w-full text-mainWhite mb-2 autocomplete-off hover:text-gray-300 transition-colors duration-200"
        onClick={() => setShowModal(true)}
      >
        폴더 정보 수정하기
      </button>
      <button
        className="block font-Pretendard font-regular text-[15px] text-left w-full text-[#CE1E34] hover:text-gray-300 transition-colors duration-200"
        onClick={handleDeleteFolder}
      >
        폴더 삭제하기
      </button>
      {showModal && (
        <SectionModal
          onSave={handleEditFolder}
          onClose={() => setShowModal(false)}
          section={section}
        />
      )}
    </div>
  );
};

export default SectionModify;
