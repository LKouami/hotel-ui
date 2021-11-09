import config from "@/config";
import { Client, SendClientRequestBuilder } from "@/models/butler/Client";
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

    public sendClient(client: Client): Promise<ApiResponse<Client>> {
        const request: Client = new SendClientRequestBuilder()
            .name(client.name)
            .email(client.email)
            .nationality(client.nationality)
            .id_card_num(client.id_card_num)
            .birth_date(client.birth_date)
            .under_cover(client.under_cover)
            .comments(client.comments)
            .client_type_id(client.client_type_id)
            .phone(client.phone)
            .createdAt(client.createdAt)
            .user_id("2")
            .modifiedAt(client.modifiedAt)
            .build()

        const requestConfig: AxiosRequestConfig = serialize(request)
        console.log(requestConfig)
        const sendUrl: string | null = 'client'

        return this.instance.post(sendUrl!, requestConfig)
            .then(response => {
                const apiResponse = new ApiResponse<Client>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = deserialize<Client>(response.data, Client)
                        console.log('post réussi')
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                        console.log('post échoué')
                        return new ApiResponse<Client>()
            })
    }

    public updateClient(client: Client): Promise<ApiResponse<Client>> {
        const request: Client = new SendClientRequestBuilder()
            .name(client.name)
            .email(client.email)
            .nationality(client.nationality)
            .id_card_num(client.id_card_num)
            .birth_date(client.birth_date)
            .under_cover(client.under_cover)
            .comments(client.comments)
            .client_type_id(client.client_type_id)
            .phone(client.phone)
            .createdAt(client.createdAt)
            .user_id("2")
            .modifiedAt(client.modifiedAt)
            .build()

        const requestConfig: AxiosRequestConfig = serialize(request)
        console.log(requestConfig)
        const sendUrl: string | null = 'client/' + client.id

        return this.instance.put(sendUrl!, requestConfig)
            .then(response => {
                const apiResponse = new ApiResponse<Client>()
                switch (response.status) {
                    case 202: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = deserialize<Client>(response.data, Client)
                        console.log('put réussi')
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                        console.log('put échoué')
                        return new ApiResponse<Client>()
            })
    }



}
