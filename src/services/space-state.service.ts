import config from "@/config";
import { SpaceState } from "@/models/butler/SpaceState";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize, deserialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";
import {Utils} from "@/common/core/utils";

export class SpaceStateService extends HttpBaseService {
    private static classInstance?: SpaceStateService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): SpaceStateService {
        if (!this.classInstance) {
            this.classInstance = new SpaceStateService(token);
        }
        return this.classInstance;
    }

    public getAll(): Promise<ApiResponse<SpaceState[]>> {
        return this.instance.get('space_state')
            .then(response => {
                const apiResponse = new ApiResponse<SpaceState[]>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = Utils.deserializeArray<SpaceState>(response.data, SpaceState)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<SpaceState[]>()
            })
    }



}
