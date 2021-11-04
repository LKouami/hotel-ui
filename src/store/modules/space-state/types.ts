import { SpaceState } from "@/models/butler/SpaceState";

export interface SpaceStateState {
    space_state: SpaceState[] 
    space_stateMap: Map<string, string> | undefined
}
