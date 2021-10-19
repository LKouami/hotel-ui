import config from "@/config";
import { SpaceType } from "@/models/butler/SpaceType";
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



}
