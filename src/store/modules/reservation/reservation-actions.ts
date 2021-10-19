import { ActionTree } from 'vuex';
import { ReservationState } from "./types";
import { RootState } from "@/store/types"
import { ReservationService } from '@/services/reservation.service';

export const actions: ActionTree<ReservationState, RootState> = {

    retrieveReservations(context) {
        ReservationService.getInstance('').getAll()
            .then(value => {
                if (value.data) {
                   context.commit('setReservation', value.data)
                }
            })
            .catch(reason => {
                console.log(reason)
            })
    },
}
