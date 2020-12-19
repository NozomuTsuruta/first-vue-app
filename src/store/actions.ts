import { ActionContext, ActionTree } from "vuex";
import { IMutations, MutationType } from "./mutations";
import { IState } from "./state";

export const ActionTypes = {
  getTodos: "GET_TODOS"
} as const;

type IActionAugments = Omit<ActionContext<IState, IState>, "commit"> & {
  commit<K extends keyof IMutations>(
    key: K,
    payload: Parameters<IMutations[K]>[1]
  ): ReturnType<IMutations[K]>;
};

export type IActions = {
  [ActionTypes.getTodos](context: IActionAugments): void;
};

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const actions: ActionTree<IState, IState> & IActions = {
  async [ActionTypes.getTodos]({ commit }) {
    commit(MutationType.setLoading, true);

    await sleep(1000);

    commit(MutationType.setLoading, false);
    commit(MutationType.setTodos, [
      {
        id: 1,
        title: "Vue3",
        text: "Create awesome Vue 3 with Vuex 4 video!",
        completed: false
      }
    ]);
  }
};
