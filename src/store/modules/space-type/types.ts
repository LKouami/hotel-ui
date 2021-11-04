import { SpaceType } from "@/models/butler/SpaceType";

export interface SpaceTypeState {
    space_type: SpaceType[] 
    space_typeMap: Map<string, string> | undefined
}
