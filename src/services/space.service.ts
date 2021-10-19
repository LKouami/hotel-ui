import config from "@/config";
import { Space } from "@/models/butler/Space";
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



}
