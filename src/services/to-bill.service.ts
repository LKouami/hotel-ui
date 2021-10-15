import config from "@/config";
import { ToBill } from "@/models/butler/ToBill";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize, deserialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";
import {Utils} from "@/common/core/utils";

export class ToBillService extends HttpBaseService {
    private static classInstance?: ToBillService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): ToBillService {
        if (!this.classInstance) {
            this.classInstance = new ToBillService(token);
        }
        return this.classInstance;
    }

    public getAll(): Promise<ApiResponse<ToBill[]>> {
        return this.instance.get('to_bill')
            .then(response => {
                const apiResponse = new ApiResponse<ToBill[]>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = Utils.deserializeArray<ToBill>(response.data, ToBill)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<ToBill[]>()
            })
    }



}
