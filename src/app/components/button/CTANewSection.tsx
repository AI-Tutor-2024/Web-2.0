"use client";
import React, { useState } from "react";
import SectionModal from "../modal/SectionModal";

interface CTANewSectionProps {
  handleClick: () => void;
}

const CTANewSection: React.FC<CTANewSectionProps> = ({ handleClick }) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
    handleClick();
  };

  const handleAddFolder = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="cursor-pointer" onClick={handleButtonClick}>
        <div className="h-[46px] flex justify-center items-center w-[160px] flex-shrink-0 bg-[#3F3F3F] border-2 border-[#565656] rounded-[27px] hover:bg-[#282828] text-mainWhite hover:text-[#878787]">
          <p className="font-Pretendard text-[18px] text-center">
            새 과목 만들기
          </p>
        </div>
      </button>
      {showModal && (
        <SectionModal
          onSave={handleAddFolder}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default CTANewSection;
