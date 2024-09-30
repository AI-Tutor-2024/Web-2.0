import { Form, ImportantContent } from "@/app/types/note";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CTANewNoteProps {
  link: string;
  form?: Form;
  importantContent?: ImportantContent;
}

const CTANewNote: React.FC<CTANewNoteProps> = ({ link }) => {
  return (
    <button type="submit" className="cursor-pointer ">
      <div className="flex flex-col justfify-center ">
        <Link href={link}>
          <div className="h-[46px] flex flex-row gap-3 items-center w-[140px] flex-shrink-0 pl-4 pr-2 py-3 bg-[#3F3F3F] border-2 border-[#565656] rounded-[27px] hover:bg-[#282828] text-mainWhite hover:text-[#878787]">
            <p className="font-Pretendard text-[18px] text-center">
              노트 만들기
            </p>
            <Image
              src="arrow_next.svg"
              alt="plus icon"
              width={12}
              height={20}
            />
          </div>
        </Link>
      </div>
    </button>
  );
};

export default CTANewNote;
