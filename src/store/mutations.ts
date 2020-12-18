import { MutationTree } from "vuex";
import { IState, ITodo } from "./state";

export const MutationType = {
  createItem: "CREATE_TODO",
  setItems: "SET_ITEMS",
  completeItem: "COMPLETE_ITEM",
  setLoading: "SET_LOADING"
} as const;

export type IMutations = {
  [MutationType.createItem](state: IState, todo: ITodo): void;
  [MutationType.setItems](state: IState, todos: ITodo[]): void;
  [MutationType.completeItem](
    state: IState,
    todo: Partial<ITodo> & { id: number }
  ): void;
  [MutationType.setLoading](state: IState, isLoading: boolean): void;
};

export const mutations: MutationTree<IState> & IMutations = {
  [MutationType.createItem](state, todo) {
    state.todos.unshift(todo);
  },
  [MutationType.setItems](state, todos) {
    state.todos = todos;
  },
  [MutationType.completeItem](state, newTodo) {
    const todo = state.todos.findIndex(({ id }) => id === newTodo.id);
    if (todo === -1) return;
    state.todos[todo] = { ...state.todos[todo], ...newTodo };
  },
  [MutationType.setLoading](state, isLoading) {
    state.loading = isLoading;
  }
};
