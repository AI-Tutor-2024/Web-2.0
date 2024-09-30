import { Form } from "@/app/types/note";
import { useState } from "react";
import PracticeHeader from "./parctice/PracticeHeader";

const NewNotePractice = ({ form }: { form: Form }) => {
  const [practiceHeaerButtonState, setPracticeHeaerButtonState] = useState<
    "practice" | "content"
  >("practice");

  const handleHeaderChange = (newHeader: "practice" | "content") => {
    if (practiceHeaerButtonState !== newHeader) {
      setPracticeHeaerButtonState(newHeader);
    }
  };
  return (
    <div>
      <PracticeHeader form={form} />
      <div className="w-full">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleHeaderChange("practice");
          }}
          className={`w-1/2 h-[43px] ${
            practiceHeaerButtonState === "practice"
              ? "bg-[#05D686]"
              : "bg-[#5F5F5F]"
          } `}
        >
          생성된 복습 문제 확인 및 선택
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleHeaderChange("content");
          }}
          className={`w-1/2 h-[43px] ${
            practiceHeaerButtonState === "content"
              ? "bg-[#05D686]"
              : "bg-[#5F5F5F]"
          } `}
        >
          생성된 요약문 확인
        </button>
      </div>
      {practiceHeaerButtonState === "practice" && (
        <div>
          <div className="text-[15px] text-white grid grid-cols-7 gap-4 h-[67px] items-center p-6 bg-[#3C3C3C]">
            <p className="col-span-2">선택</p>
            <p className="col-span-2">문제</p>
            <p className="col-span-1">답</p>
            <p className="col-span-1">문제유형</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewNotePractice;
