import config from "@/config";
import { ClientType } from "@/models/butler/ClientType";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize, deserialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";
import {Utils} from "@/common/core/utils";

export class ClientTypeService extends HttpBaseService {
    private static classInstance?: ClientTypeService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): ClientTypeService {
        if (!this.classInstance) {
            this.classInstance = new ClientTypeService(token);
        }
        return this.classInstance;
    }

    public getAll(): Promise<ApiResponse<ClientType[]>> {
        return this.instance.get('client_type')
            .then(response => {
                const apiResponse = new ApiResponse<ClientType[]>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = Utils.deserializeArray<ClientType>(response.data, ClientType)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<ClientType[]>()
            })
    }



}
