import { GetterTree } from "vuex";
import { IState } from "./state";

export type IGetters = {
  completedCount(state: IState): number;
  totalCount(state: IState): number;
};

export const getters: GetterTree<IState, IState> & IGetters = {
  completedCount(state) {
    return state.todos.filter(i => i.completed).length;
  },
  totalCount(state) {
    return state.todos.length;
  }
};
