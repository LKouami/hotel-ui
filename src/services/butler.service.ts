import config from "@/config";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";

export class ButlerService extends HttpBaseService {
    private static classInstance?: ButlerService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): ButlerService {
        if (!this.classInstance) {
            this.classInstance = new ButlerService(token);
        }
        return this.classInstance;
    }

    public retrieveAffectationMateriel(): Promise<ApiResponse<unknown>> {

        const request: SearchRequest = new SearchRequestBuilder()
                    .sort('id')
                    .direction('asc')
                    .pageIndex(1)
                    .pageSize(1)
                    .build()
                    const requestParams: AxiosRequestConfig = {
                        params: {
                            sort: 'id',
                            direction: 'asc',
                            pageSize: 1,
                            pageIndex: 1,
                        }
                    }
        const requestConfig: AxiosRequestConfig = serialize(request)

        return this.instance.get('affectationmateriel', requestParams)
            .then(response => {
                const apiResponse = new ApiResponse<unknown>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        console.log(response)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<unknown>()
            })
    }



}
