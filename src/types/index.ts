export type User = {
  id: string;
  email: string;
  name?: string;
  token?: string;
};

export type TailoredResume = {
  id: string;
  title: string;
  content: string; // plain text html-ish mock
};
