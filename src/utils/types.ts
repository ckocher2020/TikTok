export type CommentType = {
  sender: string;
  date: string;
  content: string;
};

export type VideoCommentsType = {
  vimeoId: number;
  comments: Array<CommentType>;
};
