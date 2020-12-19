import { MutationTree } from "vuex";
import { IState, ITodo } from "./state";

export const MutationType = {
  createTodo: "CREATE_TODO",
  setTodos: "SET_TODOS",
  completeTodo: "COMPLETE_TODO",
  setLoading: "SET_LOADING"
} as const;

export type IMutations = {
  [MutationType.createTodo](state: IState, todo: ITodo): void;
  [MutationType.setTodos](state: IState, todos: ITodo[]): void;
  [MutationType.completeTodo](
    state: IState,
    todo: Partial<ITodo> & { id: number }
  ): void;
  [MutationType.setLoading](state: IState, isLoading: boolean): void;
};

export const mutations: MutationTree<IState> & IMutations = {
  [MutationType.createTodo](state, todo) {
    state.todos.unshift(todo);
  },
  [MutationType.setTodos](state, todos) {
    state.todos = todos;
  },
  [MutationType.completeTodo](state, newTodo) {
    const todo = state.todos.findIndex(({ id }) => id === newTodo.id);
    if (todo === -1) return;
    state.todos[todo] = { ...state.todos[todo], ...newTodo };
  },
  [MutationType.setLoading](state, isLoading) {
    state.loading = isLoading;
  }
};
