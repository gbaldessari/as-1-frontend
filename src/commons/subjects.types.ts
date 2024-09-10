export type Block = {
  day: string;
  block: string;
}

export type Subject = {
  id: string;
  code: string;
  name: string;
  professor: string;
  section: string;
  blocks: Block[];
}
