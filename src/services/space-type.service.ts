import config from "@/config";
import { SendSpaceTypeRequestBuilder, SpaceType } from "@/models/butler/SpaceType";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize, deserialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";
import {Utils} from "@/common/core/utils";

export class SpaceTypeService extends HttpBaseService {
    private static classInstance?: SpaceTypeService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): SpaceTypeService {
        if (!this.classInstance) {
            this.classInstance = new SpaceTypeService(token);
        }
        return this.classInstance;
    }

    public getAll(): Promise<ApiResponse<SpaceType[]>> {
        return this.instance.get('space_type')
            .then(response => {
                const apiResponse = new ApiResponse<SpaceType[]>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = Utils.deserializeArray<SpaceType>(response.data, SpaceType)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<SpaceType[]>()
            })
    }

    public sendSpaceType(space_type: SpaceType): Promise<ApiResponse<SpaceType>> {
        const request: SpaceType = new SendSpaceTypeRequestBuilder()
            .name(space_type.name)
            .user_id("2")
            .createdAt(space_type.createdAt)
            .modifiedAt(space_type.modifiedAt)
            .build()

        const requestConfig: AxiosRequestConfig = serialize(request)
        const sendUrl: string | null = 'space_type'

        return this.instance.post(sendUrl!, requestConfig)
            .then(response => {
                const apiResponse = new ApiResponse<SpaceType>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = deserialize<SpaceType>(response.data, SpaceType)
                        console.log('post réussi')
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                        console.log('post échoué')
                        return new ApiResponse<SpaceType>()
            })
    }

    public updateSpaceType(space_type: SpaceType): Promise<ApiResponse<SpaceType>> {
        const request: SpaceType = new SendSpaceTypeRequestBuilder()
            .name(space_type.name)
            .user_id("2")
            .createdAt(space_type.createdAt)
            .modifiedAt(space_type.modifiedAt)
            .build()

        const requestConfig: AxiosRequestConfig = serialize(request)
        const sendUrl: string | null = 'space_type/' + space_type.id

        return this.instance.put(sendUrl!, requestConfig)
            .then(response => {
                const apiResponse = new ApiResponse<SpaceType>()
                switch (response.status) {
                    case 202: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = deserialize<SpaceType>(response.data, SpaceType)
                        console.log('post réussi')
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                        console.log('put échoué')
                        return new ApiResponse<SpaceType>()
            })
    }



}
