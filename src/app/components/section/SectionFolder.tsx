"use client";
import Image from "next/image";
import React, { useState } from "react";
import SectionModify from "../modal/SectionModify";

interface SectionFolderProps {
  subject: string;
  professor: string;
  folderId: number;
  onEdit: (subject: string, professor: string) => void;
  onClick: () => void; // onClick 속성 추가
}

const SectionFolder: React.FC<SectionFolderProps> = ({
  subject,
  professor,
  folderId,
  onEdit,
  onClick,
}) => {
  const [showModify, setShowModify] = useState(false);

  const handleMenuClick = () => {
    setShowModify(!showModify);
  };

  return (
    <div className="relative items-center">
      <div onClick={onClick}>
        {" "}
        {/* onClick 이벤트 추가 */}
        <Image
          src="/folder.svg"
          alt="folder"
          width={240}
          height={140}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-between w-full px-3 mt-[-60px]">
        <div className="flex flex-col">
          <p className="font-Pretendard text-[20px] text-mainBlack">
            {subject}
          </p>
          <p className="font-Pretendard text-[14px] text-mainBlack/[0.4]">
            {professor}
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Image
            src="kebab-menu.svg"
            alt="menu"
            width={20}
            height={20}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />
          {showModify && (
            <div className="absolute right-[18px] top-[198px] mt-[-18px] rounded-[8px] shadow-2xl">
              <SectionModify
                folderId={folderId}
                onEdit={(subject: string, professor: string) => {
                  onEdit(subject, professor);
                  setShowModify(false);
                }}
                onDelete={() => {
                  setShowModify(false);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionFolder;
