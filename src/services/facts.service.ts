import {AxiosResponse} from 'axios';
import ApiService from "./api.service";
import {RandomFactsParams} from "../shared/interfaces/api/facts/params/random-facts.params";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";

export default class FactsService {
    private apiService: ApiService;
    constructor() {
        this.apiService = new ApiService()
    }

    public async getRandomFacts(params?: RandomFactsParams): Promise<FactDto[]> {
        return new Promise((resolve) => {
            this.apiService
                .get('/facts/random', params)
                .then((response: AxiosResponse<FactDto[]>) => resolve(response.data))
        })
    }
}