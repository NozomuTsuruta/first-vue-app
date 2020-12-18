export type ITodo = {
  id: number;
  title: string;
  text: string;
};

export type IState = {
  loading: boolean;
  todos: ITodo[];
};

export const state: IState = {
  loading: false,
  todos: []
};
