import config from "@/config";
import { SendSpaceRequestBuilder, Space } from "@/models/butler/Space";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize, deserialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";
import {Utils} from "@/common/core/utils";

export class SpaceService extends HttpBaseService {
    private static classInstance?: SpaceService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): SpaceService {
        if (!this.classInstance) {
            this.classInstance = new SpaceService(token);
        }
        return this.classInstance;
    }

    public getAll(): Promise<ApiResponse<Space[]>> {
        return this.instance.get('space')
            .then(response => {
                const apiResponse = new ApiResponse<Space[]>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = Utils.deserializeArray<Space>(response.data, Space)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<Space[]>()
            })
    }

    public sendSpace(space: Space): Promise<ApiResponse<Space>> {
        const request: Space = new SendSpaceRequestBuilder()
            .name(space.name)
            .location(space.location)
            .price(space.price)
            .comments(space.comments)
            .space_type_id(space.space_type_id)
            .space_state_id(space.space_state_id)
            .location(space.location)
            .user_id("2")
            .createdAt(space.createdAt)
            .modifiedAt(space.modifiedAt)
            .modifiedBy("2")
            .build()

        const requestConfig: AxiosRequestConfig = serialize(request)
        console.log(requestConfig)
        const sendUrl: string | null = 'space'

        return this.instance.post(sendUrl!, requestConfig)
            .then(response => {
                const apiResponse = new ApiResponse<Space>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = deserialize<Space>(response.data, Space)
                        console.log('post réussi')
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                        console.log('post échoué')
                        return new ApiResponse<Space>()
            })
    }



}
