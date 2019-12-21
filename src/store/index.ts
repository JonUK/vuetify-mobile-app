import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '../types';

import { topToolbar } from './modules/topToolbar';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    topToolbar
  }
};

export default new Vuex.Store<RootState>(store);