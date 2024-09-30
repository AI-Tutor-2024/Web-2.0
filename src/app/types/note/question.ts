export interface questionObject {
  questionNumberCategory: "AI" | "input";
  questionNumber: number;
  category: "OX" | "단답형";
}

export interface PostPracticeProps {
  createPracticeReq: {
    practiceSize: number;
    type: "OX" | "단답형";
    keywords: string;
    requirement: string;
  };
  file: string;
}
