import { GetterTree } from "vuex";
import { RootState } from "@/store/types"
import { ReservationState } from './types'
import { Reservation } from "@/models/butler/Reservation";


export const getters: GetterTree<ReservationState, RootState> = {
    getReservations(state): Reservation[]{
        return state.reservation
    },

};
