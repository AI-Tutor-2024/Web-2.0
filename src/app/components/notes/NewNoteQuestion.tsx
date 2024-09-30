import { questionObject } from "@/app/types/note/question";
import Image from "next/image";
import { useState } from "react";

const NewNoteQuestion = ({
  onSubmit,
  form,
  setForm,
}: {
  onSubmit: () => void;
  form: questionObject;
  setForm: React.Dispatch<React.SetStateAction<questionObject>>;
}) => {
  const [showOXModal, setShowOXModal] = useState(false);
  const [showShortAnswerModal, setShowShortAnswerModal] = useState(false);

  const handleQuestionNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      questionNumber: parseInt(e.target.value, 10),
    }));
  };

  const handleQuestionCategoryChange = (questionCategory: "AI" | "input") => {
    setForm((prev) => ({
      ...prev,
      questionNumberCategory: questionCategory,
    }));
  };

  const handleCategoryChange = (category: "OX" | "단답형") => {
    setForm((prev) => ({
      ...prev,
      category,
    }));
  };

  const handleSubmit = () => {
    onSubmit();
    console.log("Form submitted:", form);
  };

  return (
    <div className="flex justify-start mr-auto w-full flex-col px-[56px] py-[30px] h-full">
      <p className="text-white text-base">복습 문제 생성 옵션을 선택해주세요</p>
      <p className="text-white text-xl">새로운 문제 복습지</p>

      <div className="flex mt-16 items-start gap-20">
        <p className="text-white text-base flex items-start top-0">문제 개수</p>
        <div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleQuestionCategoryChange("AI")}
              className={`w-fit p-2 h-[37px] text-white rounded-[16px] ${
                form.questionNumberCategory === "AI"
                  ? "bg-[#00ff9d]"
                  : "bg-[#3F3F3F]"
              }`}
            >
              AI 추천
            </button>
            <p className="text-white text-base">
              복습에 필요한 중요 문제만 제공해드려요
            </p>
          </div>
          <div className="flex items-center gap-6 mt-6">
            <button
              onClick={() => handleQuestionCategoryChange("input")}
              className={`w-fit p-2 h-[37px] text-white rounded-[16px] ${
                form.questionNumberCategory === "input"
                  ? "bg-[#05D686]"
                  : "bg-[#3F3F3F]"
              }`}
            >
              직접 입력
            </button>
            <input
              type="number"
              value={form.questionNumber || ""}
              onChange={handleQuestionNumberChange}
              className="border-b border-mainWhite bg-transparent text-mainWhite outline-none w-[30px]"
            />
            <p className="text-white text-base ml-[-14px]">개</p>
          </div>
        </div>
      </div>
      <div className="flex mt-16 items-center gap-20">
        <p className="text-white text-base">문제 유형</p>
        <div>
          <div className="flex items-center gap-6">
            <button
              onMouseEnter={() => setShowOXModal(true)}
              onMouseLeave={() => setShowOXModal(false)}
              onClick={() => handleCategoryChange("OX")}
              className={`w-fit p-2 h-[37px] text-white rounded-[16px] ${
                form.category === "OX" ? "bg-[#05D686]" : "bg-[#3F3F3F]"
              }`}
            >
              O X 퀴즈
            </button>

            {showOXModal && (
              <div className="absolute bg-[#343434] flex flex-col gap-2 w-[380px] top-[350px] text-white p-4 rounded-lg shadow-lg">
                <p>문제 예시</p>
                <p className="text-[20px] font-bold flex justify-center">
                  수요 곡선은 일반적으로 우하향한다.
                </p>
                <div className="flex justify-center gap-16">
                  <div className="w-[50px] h-[50px] rounded-md text-[20px] bg-black flex justify-center items-center">
                    O
                  </div>
                  <div className="w-[50px] h-[50px] rounded-md text-[20px] bg-black flex justify-center items-center">
                    X
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => handleCategoryChange("단답형")}
              onMouseEnter={() => setShowShortAnswerModal(true)}
              onMouseLeave={() => setShowShortAnswerModal(false)}
              className={`w-fit p-2 h-[37px] text-white rounded-[16px] ${
                form.category === "단답형" ? "bg-[#05D686]" : "bg-[#3F3F3F]"
              }`}
            >
              단답형
            </button>

            {showShortAnswerModal && (
              <div className="absolute bg-[#343434] flex flex-col gap-2 w-[380px] left-[480px] top-[350px] text-white p-4 rounded-lg shadow-lg">
                <p>문제 예시</p>
                <p className="text-[20px] font-bold flex justify-center">
                  컴퓨터의 주기억장치는?
                </p>
                <div className="flex justify-center gap-16">
                  <div className="w-[150px] h-[50px] rounded-md text-[20px] bg-black flex justify-center items-center">
                    RAM
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-grow justify-end items-end">
        <button
          type="submit"
          onClick={handleSubmit}
          className="h-[46px] flex flex-row gap-3 items-center w-fit flex-shrink-0 pl-4 pr-2 py-3 bg-[#3F3F3F] border-2 border-[#565656] rounded-[27px] hover:bg-[#282828] text-mainWhite hover:text-[#878787] justify-end ml-auto"
        >
          <p>복습 문제 생성</p>
          <Image src="arrow_next.svg" alt="plus icon" width={12} height={20} />
        </button>
      </div>
    </div>
  );
};

export default NewNoteQuestion;
