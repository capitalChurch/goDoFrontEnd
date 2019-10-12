import {GetterTree} from 'vuex';
import {State} from '@/model/store/types';
import {GET_COUNTRIES, GET_USER_INFO} from '@/model/store/constants';
import {Countries, Person} from '@/model/types';

export const getters: GetterTree<State, State> = {
    [GET_USER_INFO]: function(state): Person{
        return state.person;
    },
    [GET_COUNTRIES]: function(state): Countries{
        return state.countries;
    }
};
