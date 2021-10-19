import config from "@/config";
import { Reservation } from "@/models/butler/Reservation";
import { ApiResponse } from "@/models/http/ApiResponse";
import { SearchRequest, SearchRequestBuilder } from "@/models/request/SearchRequest";
import { AxiosRequestConfig } from "axios";
import { serialize, deserialize } from "typescript-json-serializer";
import { HttpBaseService } from "./httpBase.service";
import {Utils} from "@/common/core/utils";

export class ReservationService extends HttpBaseService {
    private static classInstance?: ReservationService;

    constructor(token: string) {
        super(token, config.baseURL);
    }


    public static getInstance(token:string): ReservationService {
        if (!this.classInstance) {
            this.classInstance = new ReservationService(token);
        }
        return this.classInstance;
    }

    public getAll(): Promise<ApiResponse<Reservation[]>> {
        return this.instance.get('reservation')
            .then(response => {
                const apiResponse = new ApiResponse<Reservation[]>()
                switch (response.status) {
                    case 204: {
                        return apiResponse
                    }
                    default: {
                        apiResponse.data = Utils.deserializeArray<Reservation>(response.data, Reservation)
                        return apiResponse
                    }
                }
            })
            .catch(error => {
                return new ApiResponse<Reservation[]>()
            })
    }



}
