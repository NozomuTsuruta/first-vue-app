import { getters, IGetters } from "./getters";
import { actions, IActions } from "./actions";
import { IMutations, mutations } from "./mutations";
import {
  CommitOptions,
  createLogger,
  createStore,
  DispatchOptions,
  Store as VuexStore
} from "vuex";
import { IState, state } from "./state";

export const store = createStore({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  state,
  mutations,
  actions,
  getters
});

export function useStore() {
  return store as IStore;
}

export type IStore = Omit<
  VuexStore<IState>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof IMutations, P extends Parameters<IMutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<IMutations[K]>;
} & {
  dispatch<K extends keyof IActions>(
    key: K,
    payload: Parameters<IActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<IActions[K]>;
} & {
  getters: {
    [K in keyof IGetters]: ReturnType<IGetters[K]>;
  };
};
