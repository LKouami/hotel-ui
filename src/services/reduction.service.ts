import config from "@/config";
import { Reduction, SendReductionRequestBuilder } from "@/models/butler/Reduction";
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

    public sendReduction(reduction: Reduction): Promise<ApiResponse<Reduction>> {
        const request: Reduction = new SendReductionRequestBuilder()
            .name(reduction.name)
            .rate(reduction.rate)
            .user_id(reduction.user_id)
            .createdAt(reduction.createdAt)
            .modifiedAt(reduction.modifiedAt)
            .modifiedBy(reduction.modifiedBy)
            .build()

        const requestConfig: AxiosRequestConfig = serialize(request)
        console.log(requestConfig)
        const sendUrl: string | null = 'reduction'

        return this.instance.post(sendUrl!, requestConfig)
            .then(response => {
                const apiResponse = new ApiResponse<Reduction>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = deserialize<Reduction>(response.data, Reduction)
                        console.log('post réussi')
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                        console.log('post échoué')
                        return new ApiResponse<Reduction>()
            })
    }



}
