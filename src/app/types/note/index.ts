export interface Form {
  folder: string;
  professor: string;
  lectureName: string;
  file: string;
}

export interface ImportantContent {
  keywords: string;
  requestment: string;
}

export interface NewNoteFormProps {
  form: Form;
  importantContent: ImportantContent;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImportantContentChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: () => void;
}
