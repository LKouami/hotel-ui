import { ActionTree } from 'vuex';
import { ButlerState } from "./types";
import { RootState } from "@/store/types"
import { ButlerService } from '@/services/butler.service';

export const actions: ActionTree<ButlerState, RootState> = {

    retrieveAffectationMateriel(context) {
        ButlerService.getInstance('').retrieveAffectationMateriel()
            .then(value => {
                if (value.data) {
                   console.log(value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
    

}
