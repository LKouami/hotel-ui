import config from "@/config";
import { ClientType, SendClientTypeRequestBuilder } from "@/models/butler/ClientType";
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

    public sendClientType(client_type: ClientType): Promise<ApiResponse<ClientType>> {
        const request: ClientType = new SendClientTypeRequestBuilder()
            .name(client_type.name)
            .user_id(client_type.user_id)
            .createdAt(client_type.createdAt)
            .modifiedAt(client_type.modifiedAt)
            .build()

        const requestConfig: AxiosRequestConfig = serialize(request)
        console.log(requestConfig)
        const sendUrl: string | null = 'client_type'

        return this.instance.post(sendUrl!, requestConfig)
            .then(response => {
                const apiResponse = new ApiResponse<ClientType>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = deserialize<ClientType>(response.data, ClientType)
                        console.log('post réussi')
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                        console.log('post échoué')
                        return new ApiResponse<ClientType>()
            })
    }

    public updateClientType(client_type: ClientType): Promise<ApiResponse<ClientType>> {
        const request: ClientType = new SendClientTypeRequestBuilder()
            .name(client_type.name)
            .user_id(client_type.user_id)
            .createdAt(client_type.createdAt)
            .modifiedAt(client_type.modifiedAt)
            .build()

        const requestConfig: AxiosRequestConfig = serialize(request)
        console.log(requestConfig)
        const sendUrl: string | null = 'client_type/' + client_type.id

        return this.instance.put(sendUrl!, requestConfig)
            .then(response => {
                const apiResponse = new ApiResponse<ClientType>()
                switch (response.status) {
                    case 202: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = deserialize<ClientType>(response.data, ClientType)
                        console.log('put réussi')
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                        console.log('put échoué')
                        return new ApiResponse<ClientType>()
            })
    }



}
