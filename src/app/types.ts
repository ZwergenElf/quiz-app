export type Player = {
  // name is uuid
  name: string;
  score: number;
};

export type Category = string;

export type Question = {
  id: number;
  category: string;
  points: number;
  questionText: string;
  answer: string;
};
