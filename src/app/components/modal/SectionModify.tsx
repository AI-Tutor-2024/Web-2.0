"use client";
import { deleteFolder } from "@/app/api/folder";
import React, { useState } from "react";
import SectionModal from "./SectionModal";

interface SectionModifyProps {
  folderId: number;
  onEdit: (subject: string, professor: string) => void;
  onDelete: () => void;
}

const SectionModify: React.FC<SectionModifyProps> = ({
  folderId,
  onEdit,
  onDelete,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteFolder = async () => {
    await deleteFolder(folderId);
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
        <SectionModal onSave={onEdit} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default SectionModify;
