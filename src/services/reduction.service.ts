import config from "@/config";
import { Reduction } from "@/models/butler/Reduction";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize, deserialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";
import {Utils} from "@/common/core/utils";

export class ReductionService extends HttpBaseService {
    private static classInstance?: ReductionService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): ReductionService {
        if (!this.classInstance) {
            this.classInstance = new ReductionService(token);
        }
        return this.classInstance;
    }

    public getAll(): Promise<ApiResponse<Reduction[]>> {
        return this.instance.get('reduction')
            .then(response => {
                const apiResponse = new ApiResponse<Reduction[]>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = Utils.deserializeArray<Reduction>(response.data, Reduction)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<Reduction[]>()
            })
    }



}
