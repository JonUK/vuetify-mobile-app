import { ActionTree, Module, MutationTree, GetterTree } from 'vuex';
import { TopToolbarState, RootState } from '../../types';

const state: TopToolbarState = {
  title: 'Top Stories',
};

export const getters: GetterTree<TopToolbarState, RootState> = {
  title: (theState: TopToolbarState) => {
    return theState.title;
  }
};

const mutations: MutationTree<TopToolbarState> = {
  setTitle(theState: TopToolbarState, title: string) {
    theState.title = title;
  },
};

export const actions: ActionTree<TopToolbarState, RootState> = {
  changeTitle({commit}, title: string) {
    commit('setTitle', title);
  },
};

export const topToolbar: Module<TopToolbarState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
