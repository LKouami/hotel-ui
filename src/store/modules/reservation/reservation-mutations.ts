import { Reservation } from '@/models/butler/Reservation';
import { MutationTree } from 'vuex';
import { ReservationState } from "./types";

export const mutations: MutationTree<ReservationState> = {
    setReservation(state, payload: Reservation[]) {
        state.reservation = payload
        console.log(state.reservation)
    },
};
