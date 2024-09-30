import { useState } from "react";

const NewNoteInputComponent = ({
  importantContent,
  onChange,
}: {
  importantContent: {
    keywords: string;
    requestment: string;
  };
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  const [inputComponentHeader, setInputComponentHeader] = useState<
    "keywords" | "require"
  >("keywords");

  const handleHeaderChange = (newHeader: "keywords" | "require") => {
    if (inputComponentHeader !== newHeader) {
      setInputComponentHeader(newHeader);
    }
  };

  return (
    <div>
      {/* 5F5F5F */}
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleHeaderChange("keywords");
          }}
          className={`w-[355px] h-[43px] ${
            inputComponentHeader === "keywords"
              ? "bg-[#05D686]"
              : "bg-[#5F5F5F]"
          } rounded-tl-xl`}
        >
          핵심 키워드 입력
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleHeaderChange("require");
          }}
          className={`w-[355px] h-[43px] ${
            inputComponentHeader === "require" ? "bg-[#05D686]" : "bg-[#5F5F5F]"
          } rounded-tr-xl`}
        >
          요구 사항 입력
        </button>
      </div>
      {inputComponentHeader === "keywords" ? (
        <textarea
          name="keywords"
          value={importantContent.keywords}
          onChange={onChange}
          placeholder="요약문을 작성할 때 강조하고 싶은 키워드를 입력해주시면, 해당 키워드를 더욱 신경 써서 반영한 요약문을 제공해드리겠습니다."
          className="mt-1 bg-[#252424] resize-none p-4 text-white h-[185px] w-[710px] rounded-br-xl rounded-bl-xl outline-none"
        />
      ) : (
        <textarea
          name="requestment"
          value={importantContent.requestment}
          onChange={onChange}
          placeholder="요구사항 입력을 통해 다양한 출력문을 만나보세요!
            강의에서 강조하고 싶은 내용 혹은 어투, 분량을 정해주세요. 아래의 예시와 같이 입력하면 교수님께 맞는 결과를 출력해드려요.
            예시1) 15줄 이내로 '~입니다'체로 정리해줘
            예시2) 문장의 끝을 '~해요'체로 정리해줘
            예시3) 3줄로 핵심만 뽑아내줘. 강의의 주제에 대한 간단 요약문으로"
          className="mt-1 bg-[#252424] resize-none p-4 text-white h-[185px] w-[710px] rounded-br-xl rounded-bl-xl outline-none"
        />
      )}
    </div>
  );
};

export default NewNoteInputComponent;
