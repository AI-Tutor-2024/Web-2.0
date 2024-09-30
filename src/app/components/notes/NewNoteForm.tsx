"use client";
import { NewNoteFormProps } from "@/app/types/note";
import Image from "next/image";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import LoadingModal from "../modal/LoadingModal";
import NewNoteInputComponent from "./NewNoteInputComponent";

const NewNoteForm: React.FC<NewNoteFormProps> = ({
  form,
  importantContent,
  handleChange,
  handleImportantContentChange,
  onSubmit,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = () => {
    const target = {
      name: "file",
      value: file ? file.name : "",
    } as HTMLInputElement;

    if (handleChange) {
      handleChange({
        target, // { name: 'file', value: file ? file.name : "" } 객체를 target으로 사용
      } as React.ChangeEvent<HTMLInputElement>);
    }

    onSubmit();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-full bg-bgGray text-white p-8 space-y-4">
      {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
      <div>
        <label className="text-[15px] font-Pretendard font-normal text-mainWhite">
          노트 정보를 입력해 주세요
        </label>
        <input
          type="text"
          name="noteName"
          value={form.noteName}
          onChange={handleChange}
          placeholder="예) 캡스톤디자인 1주차"
          className="mt-1 block bg-bgGray text-mainWhite text-[22px] rounded-md py-1 pr-2 pl-0 outline-none"
        />
      </div>
      <div className="flex flex-row gap-12">
        <label className="text-[16px] text-start font-normal font-Pretendard text-mainWhite justify-center flex flex-col items-center">
          폴더
        </label>
        <input
          type="text"
          name="folder"
          value={form.folder}
          onChange={handleChange}
          className="mt-1 bg-[#252424] text-white h-[34px] w-[150px] rounded-[20px] px-3 outline-none"
        />
      </div>
      <div className="flex flex-row gap-9">
        <label className="text-[16px] font-normal font-Pretendard text-mainWhite justify-center flex flex-col text-center items-center">
          교수자
        </label>
        <input
          type="text"
          name="professor"
          value={form.professor}
          onChange={handleChange}
          className="mt-1 bg-[#252424] text-white h-[34px] w-[120px] rounded-[20px] outline-none px-3"
        />
      </div>
      <div className="flex flex-row gap-9">
        <label className="text-[16px] font-normal font-Pretendard text-mainWhite justify-center flex flex-col text-center items-center">
          강의명
        </label>
        <input
          type="text"
          name="lectureName"
          value={form.lectureName}
          onChange={handleChange}
          className="mt-1 bg-[#252424] text-white h-[34px] w-[180px] rounded-[20px] outline-none px-3"
        />
      </div>
      <div className="flex flex-row gap-5">
        <label className="text-[16px] mt-[8px] font-normal font-Pretendard text-mainWhite justify-start flex flex-col text-start items-start flex-shrink-0">
          강의 음성
        </label>
        <div className="mt-1 flex justify-between w-full mb-[76px]">
          <div
            {...getRootProps()}
            className="flex flex-col justify-start w-[730px] h-32 rounded-[12px] p-5 cursor-pointer bg-[#252424] text-gray-400 hover:text-gray-500 hover:bg-bgDeepGray"
          >
            <input {...getInputProps()} />
            {!file ? (
              <>
                <div className="flex flex-col text-start items-start justify-start">
                  <p className="mb-1 text-sm text-[#D9D9D9]">
                    <span className="font-normal">
                      강의 녹화, 녹음본으로 학습 콘텐츠를 만들어보세요
                    </span>
                  </p>

                  <p className="text-xs text-gray-500">
                    &apos;파일 첨부&apos;를 클릭하거나 음성 파일을 직접 끌어다
                    놓으세요.(파일 길이: 최대 120분, 지원 형식: m4a, mp3, wav)
                  </p>
                </div>
                <div className="mt-3 flex flex-col justify-end items-end">
                  <button className="pr-3 pl-2 py-2 flex flex-row gap-1 rounded-md bg-[#5F5F5F]">
                    <Image
                      src="icon_upload.svg"
                      alt="file-upload"
                      width={22}
                      height={22}
                    />
                    <span className="text-[14px] text-mainWhite">
                      파일 첨부
                    </span>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col text-start items-start justify-start">
                <p className="mb-1 text-sm text-[#D9D9D9]">
                  <span className="font-normal">파일 이름: {file.name}</span>
                </p>
                <p className="text-xs text-gray-500">파일 형식: {file.type}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex mt-[76px] gap-5">
        <label className="text-[16px] h-[43px] font-normal font-Pretendard text-mainWhite justify-start flex flex-col text-start items-start flex-shrink-0">
          중요 내용
        </label>
        <NewNoteInputComponent
          importantContent={importantContent}
          onChange={handleImportantContentChange!}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="h-[46px] flex flex-row gap-3 items-center w-fit flex-shrink-0 pl-4 pr-2 py-3 bg-[#3F3F3F] border-2 border-[#565656] rounded-[27px] hover:bg-[#282828] text-mainWhite hover:text-[#878787] justify-end ml-auto"
      >
        <p>다음</p>
        <Image src="arrow_next.svg" alt="plus icon" width={12} height={20} />
      </button>
      {/* </form> */}
      <LoadingModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default NewNoteForm;
