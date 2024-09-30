"use client";
import Sidebar from "@/app/components/layout/Sidebar";
import NewNoteForm from "@/app/components/notes/NewNoteForm";
import NewNotePractice from "@/app/components/notes/NewNotePractice";
import NewNoteQuestion from "@/app/components/notes/NewNoteQuestion";
import useSections from "@/app/store/useSections";
import { PostPracticeProps, questionObject } from "@/app/types/note/question";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const NewNotePage: React.FC = () => {
  const { sections } = useSections();
  const searchParams = useSearchParams();
  const foldername = searchParams.get("foldername");
  const professor = searchParams.get("professor");
  const [form, setForm] = useState({
    folder: foldername || "",
    professor: professor || "",
    lectureName: "",
    noteName: "",
    file: "",
  });

  const [importantContent, setImportantContent] = useState({
    keywords: "",
    requestment: "",
  });

  const [newNotePage, setNewNotePage] = useState<
    "newNote" | "qeustion" | "newContent" | "pdf"
  >("newNote");

  const [questionForm, setQuestionForm] = useState<questionObject>({
    questionNumberCategory: "AI",
    questionNumber: 0,
    category: "OX",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImportantContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setImportantContent({
      ...importantContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleNewPractice = async () => {
    setNewNotePage("newContent");
    const createPracticeReq: PostPracticeProps["createPracticeReq"] = {
      practiceSize:
        questionForm.questionNumberCategory === "input"
          ? questionForm.questionNumber
          : 0,
      type: questionForm.category,
      keywords: importantContent.keywords,
      requirement: importantContent.requestment,
    };

    // const result = await postPractice({ createPracticeReq, file: form.file });
  };

  return (
    <div className="flex flex-row bg-bgGray h-full">
      <Sidebar sections={sections} />
      <div className="justify-between flex flex-col w-full ">
        {/* 새로운 노트만들기 */}
        {newNotePage === "newNote" && (
          <NewNoteForm
            form={form}
            importantContent={importantContent}
            handleChange={handleChange}
            handleImportantContentChange={handleImportantContentChange}
            onSubmit={() => setNewNotePage("qeustion")}
          />
        )}
        {/* 노트만들기 버튼 */}
        {/* <div className="p-8">
          <CTANewNote
            form={form}
            importantContent={importantContent}
            link="/paper"
          />
        </div> */}
        {newNotePage === "qeustion" && (
          <NewNoteQuestion
            onSubmit={handleNewPractice}
            form={questionForm}
            setForm={setQuestionForm}
          />
        )}
        {newNotePage === "newContent" && <NewNotePractice form={form} />}
      </div>
    </div>
  );
};

export default NewNotePage;
