export type ITodo = {
  id: number;
  text: string;
  completed: boolean;
};

export type IState = {
  loading: boolean;
  todos: ITodo[];
};

export const state: IState = {
  loading: false,
  todos: []
};
