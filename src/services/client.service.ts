import config from "@/config";
import { Client } from "@/models/butler/Client";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize, deserialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";
import {Utils} from "@/common/core/utils";

export class ClientService extends HttpBaseService {
    private static classInstance?: ClientService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): ClientService {
        if (!this.classInstance) {
            this.classInstance = new ClientService(token);
        }
        return this.classInstance;
    }

    public getAll(): Promise<ApiResponse<Client[]>> {
        return this.instance.get('client')
            .then(response => {
                const apiResponse = new ApiResponse<Client[]>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = Utils.deserializeArray<Client>(response.data, Client)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<Client[]>()
            })
    }



}
