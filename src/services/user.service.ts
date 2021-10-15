import config from "@/config";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize, deserialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";
import {Utils} from "@/common/core/utils";
import { User } from "@/models/butler/User";

export class UserService extends HttpBaseService {
    private static classInstance?: UserService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): UserService {
        if (!this.classInstance) {
            this.classInstance = new UserService(token);
        }
        return this.classInstance;
    }

    public getAll(): Promise<ApiResponse<User[]>> {
        return this.instance.get('user')
            .then(response => {
                const apiResponse = new ApiResponse<User[]>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = Utils.deserializeArray<User>(response.data, User)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<User[]>()
            })
    }



}
