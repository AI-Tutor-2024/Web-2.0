import { Form } from "@/app/types/note";
import Image from "next/image";

const PracticeHeader = ({ form }: { form: Form }) => {
  return (
    <div className="flex justify-between text-white text-[22px] px-[32px] py-[25px]">
      <div>
        <p>{form.noteName}</p>
        <div className="flex gap-12 mt-3">
          <p className="text-[15px] text-[#707070]">{form.folder}</p>
          <p className="text-[15px] text-[#707070]">{form.professor}</p>
          <p className="text-[15px] text-[#707070]">121분</p>
        </div>
      </div>
      <Image
        src="btn_note_top_more.svg fill.svg"
        alt="plus icon"
        width={24}
        height={24}
      />
    </div>
  );
};

export default PracticeHeader;
