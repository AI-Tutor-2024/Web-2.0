"use client";

import { FolderListData } from "@/app/types/folder";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface SidebarProps {
  sections: FolderListData[];
}

const Sidebar: React.FC<SidebarProps> = ({ sections }) => {
  const [showSections, setShowSections] = useState(false);

  const toggleSections = () => setShowSections(!showSections);

  return (
    <div className="w-[223px] h-screen justify-between flex flex-col z-20 bg-mainBlack">
      <div>
        <Link href="/home">
          <div className="px-8 py-8">
            <Image src="/icon.svg" alt="logo" width={100} height={100} />
          </div>
        </Link>
        <div>
          <div className="hover:bg-[#3c3c3c] active:bg-[#3c3c3c]">
            <Link href="/home">
              <div className="px-8 py-2 flex flex-row text-center gap-3">
                <Image
                  src="ic_side_home.svg"
                  alt="logo"
                  width={20}
                  height={20}
                />
                <p className="text-white">홈</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col">
            <div
              className="px-8 py-2 flex flex-row text-center gap-3 cursor-pointer hover:bg-[#3c3c3c] active:bg-[#3c3c3c]"
              onClick={toggleSections}
            >
              <Image src="ic_side_all.svg" alt="logo" width={20} height={20} />
              <p className="text-white mr-8 flex-shrink-0">수강과목</p>
              <Image
                src="arrow_sidebar.svg"
                alt="arrow"
                width={7}
                height={7}
                className={`invert transition-transform ${
                  showSections ? "rotate-90" : ""
                }`}
              />
            </div>
            {showSections &&
              sections.map((section, index) => (
                <Link key={index} href="/classNotes">
                  <div className="px-8 py-2 flex flex-row text-center gap-3 hover:bg-[#3c3c3c] cursor-pointer">
                    <Image
                      src="ic_side_folder.svg"
                      alt="folder"
                      width={20}
                      height={20}
                    />
                    <p className="text-sm text-white flex-shrink-0">
                      {section.folderName}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="pb-8">
        <div className="hover:bg-[#3c3c3c] active:bg-[#3c3c3c]">
          <div className="flex flex-row px-9 py-2 gap-3 hover:bg-#3c3c3c">
            <Image src="logout.svg" alt="logo" width={15} height={15} />
            <p className="text-white">로그아웃</p>
          </div>
        </div>
        <div className="hover:bg-[#3c3c3c] active:bg-[#3c3c3c]">
          <div className="flex flex-row px-[35px] py-2 gap-3 hover:bg-#3c3c3c">
            <Image src="guide.svg" alt="logo" width={18} height={18} />
            <p className="text-white">가이드보기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
