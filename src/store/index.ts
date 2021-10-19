import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import  { RootState } from './types'
import { butler } from './modules/butler/index';
import { bill } from './modules/bill/index';
import { client } from './modules/client/index';
import { client_type } from './modules/client-type/index';
import { reduction } from './modules/reduction/index';
import { reservation } from './modules/reservation/index';
import { role } from './modules/role/index';
import { sidebar } from './modules/sidebar/index';
import { space } from './modules/space/index';
import { space_state } from './modules/space-state/index';
import { space_type } from './modules/space-type/index';
import { to_bill } from './modules/to-bill/index';
import { user } from './modules/user/index';

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0'
    },
    modules: {
       
        butler : butler,
        sidebar : sidebar,
        role : role,
        user : user,
        client_type : client_type,
        bill : bill,
        reduction : reduction,
        space : space,
        space_type : space_type,
        space_state : space_state,
        to_bill : to_bill,
        client : client,
        reservation : reservation,
    },
    devtools: false
}


export default new Vuex.Store<RootState>(store)
