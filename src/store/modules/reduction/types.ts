import { Reduction } from "@/models/butler/Reduction";

export interface ReductionState {
    reductions: Reduction[] 
    reductionMap: Map<string, string> | undefined
}
