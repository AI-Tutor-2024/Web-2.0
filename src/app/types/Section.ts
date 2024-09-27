export interface Section {
  folderId: number;
  folderName: string;
  professor: string;
}

export interface SectionModalProps {
  onClose: () => void;
  addSection: (section: Partial<Section>) => void;
  initialData?: Partial<Section>; // 선택적 속성으로 정의
}

export interface CTANewSectionProps {
  addSection: (section: Section) => void;
}
