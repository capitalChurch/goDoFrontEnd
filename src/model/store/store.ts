import Vue from 'vue';
import {state} from '@/model/store/state';
import Vuex, {StoreOptions} from 'vuex';
import {State} from '@/model/store/types';
import {getters} from '@/model/store/getters';

Vue.use(Vuex);

const opts: StoreOptions<State> = {
  state,
  getters
};
export default new Vuex.Store(opts);
