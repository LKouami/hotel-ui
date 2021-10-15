import {Module} from "vuex";
import {RootState} from "@/store/types";
import {getters} from "@/store/modules/reservation/reservation-getters";
import {actions} from "@/store/modules/reservation/reservation-actions";
import {mutations} from "@/store/modules/reservation/reservation-mutations";
import {ReservationState} from "@/store/modules/reservation/types";

export const state: ReservationState = {
    reservation : []
};

export const reservation: Module<ReservationState, RootState> = {
    namespaced : true,
    state,
    getters,
    actions,
    mutations,
};
