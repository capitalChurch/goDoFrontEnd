import {State} from '@/model/store/types';
import {Person} from '@/model/types';

export const state: State = {
    countries: [],
    person: {
        name: 'kevyn pinheiro klava',
        address: {
            addressLine: 'chac 129 lote 15, Taguatinga Norte',
            city: 'Taguatinga',
            state: 'DF'
        },
        email: 'kevynsax@gmail.com',
        password: '',
        phone: 61985891092,
        prayers: [],
        projects: []
    } as Person
};
