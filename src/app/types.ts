export type Player = {
  // name is uuid
  name: string;
  score: number;
};
export type TableCategory = {
  indexId: number;
  key: string;
  category: string;
};
export type TablePoints = {
  indexId: number;
  key: string;
  points: number;
};
export type Category = string;

export type Question = {
  // combination of col index + row index
  // not using category + row points as id, to avoid possible duplicates
  id: string;
  questionText: string;
  answer: string;
};
