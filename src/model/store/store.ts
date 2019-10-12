import Vue from 'vue';
import {state} from '@/model/store/state';
import Vuex, {StoreOptions} from 'vuex';
import {State} from '@/model/store/types';

Vue.use(Vuex);

const opts: StoreOptions<State> = {
  state
};
export default new Vuex.Store(opts);
