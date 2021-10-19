import config from "@/config";
import { Role } from "@/models/butler/Role";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize, deserialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";
import {Utils} from "@/common/core/utils";

export class RoleService extends HttpBaseService {
    private static classInstance?: RoleService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): RoleService {
        if (!this.classInstance) {
            this.classInstance = new RoleService(token);
        }
        return this.classInstance;
    }

    public getAll(): Promise<ApiResponse<Role[]>> {
        return this.instance.get('role')
            .then(response => {
                const apiResponse = new ApiResponse<Role[]>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = Utils.deserializeArray<Role>(response.data, Role)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<Role[]>()
            })
    }



}
