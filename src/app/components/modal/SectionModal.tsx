"use client";
import Image from "next/image";
import React, { useState } from "react";

interface SectionModalProps {
  onSave: (subject: string, professor: string) => Promise<void> | void;
  onClose: () => void;
  initialSubject?: string;
  initialProfessor?: string;
}

const SectionModal: React.FC<SectionModalProps> = ({
  onSave,
  onClose,
  initialSubject = "",
  initialProfessor = "",
}) => {
  const [subject, setSubject] = useState(initialSubject);
  const [professor, setProfessor] = useState(initialProfessor);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-20">
      <div className="bg-[#3E3E3E] w-[490px] h-[440px] py-4 px-6 rounded-[20px] shadow-lg relative">
        <Image
          src="/folder.svg"
          alt="folder"
          width={180}
          height={140}
          className="mx-auto m-4"
        />
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="subject">
            과목명
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="과목명"
            className="w-full px-3 py-2 bg-[#2E2E2E] text-white rounded-md outline-none"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2" htmlFor="professor">
            교수자명
          </label>
          <input
            type="text"
            name="professor"
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
            placeholder="교수자명"
            className="w-full px-3 py-2 bg-[#2E2E2E] text-white rounded-md outline-none"
          />
        </div>
        <div className="flex justify-end gap-3">
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded-[10px]"
            onClick={onClose}
          >
            취소
          </button>
          <button
            type="submit"
            className="bg-mainGreen text-white px-4 py-2 rounded-[10px]"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionModal;
