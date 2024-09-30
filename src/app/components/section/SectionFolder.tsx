"use client";
import { FolderListData } from "@/app/types/folder";
import Image from "next/image";
import React, { useState } from "react";
import SectionModify from "../modal/SectionModify";

interface SectionFolderProps {
  section: FolderListData;
  onClick: (section: FolderListData) => void; // onClick 속성 추가
}

const SectionFolder: React.FC<SectionFolderProps> = ({ section, onClick }) => {
  const [showModify, setShowModify] = useState(false);

  const handleMenuClick = () => {
    setShowModify(!showModify);
  };

  return (
    <div className="relative items-center">
      <div onClick={() => onClick(section)}>
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
            {section.folderName}
          </p>
          <p className="font-Pretendard text-[14px] text-mainBlack/[0.4]">
            {section.professor}
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
                section={section}
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
