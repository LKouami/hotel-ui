import config from "@/config";
import { SendSpaceStateRequestBuilder, SpaceState } from "@/models/butler/SpaceState";
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

    public sendSpaceState(space_state: SpaceState): Promise<ApiResponse<SpaceState>> {
        const request: SpaceState = new SendSpaceStateRequestBuilder()
            .name(space_state.name)
            .user_id("2")
            .createdAt(space_state.createdAt)
            .modifiedAt(space_state.modifiedAt)
            .build()

        const requestConfig: AxiosRequestConfig = serialize(request)
        console.log(requestConfig)
        const sendUrl: string | null = 'space_state'

        return this.instance.post(sendUrl!, requestConfig)
            .then(response => {
                const apiResponse = new ApiResponse<SpaceState>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = deserialize<SpaceState>(response.data, SpaceState)
                        console.log('post réussi')
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                        console.log('post échoué')
                        return new ApiResponse<SpaceState>()
            })
    }

    public updateSpaceState(space_state: SpaceState): Promise<ApiResponse<SpaceState>> {
        const request: SpaceState = new SendSpaceStateRequestBuilder()
            .name(space_state.name)
            .user_id("2")
            .createdAt(space_state.createdAt)
            .modifiedAt(space_state.modifiedAt)
            .build()

        const requestConfig: AxiosRequestConfig = serialize(request)
        console.log(requestConfig)
        const sendUrl: string | null = 'space_state/'+ space_state.id

        return this.instance.put(sendUrl!, requestConfig)
            .then(response => {
                const apiResponse = new ApiResponse<SpaceState>()
                switch (response.status) {
                    case 202: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = deserialize<SpaceState>(response.data, SpaceState)
                        console.log('put réussi')
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                        console.log('put échoué')
                        return new ApiResponse<SpaceState>()
            })
    }



}
