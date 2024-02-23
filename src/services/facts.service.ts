import {AxiosResponse} from 'axios';
import ApiService from "./api.service";
import {RandomFactsParams} from "../shared/interfaces/api/facts/params/random-facts.params";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";
import StorageService from "./storage.service";

export default class FactsService {
    private apiService: ApiService;
    private storageService: StorageService;
    private readonly storageKey = 'favourites_facts'
    constructor() {
        this.apiService = new ApiService();
        this.storageService = new StorageService();
    }

    public async getRandomFacts(params?: RandomFactsParams): Promise<FactDto[]> {
        return new Promise((resolve) => {
            this.apiService
                .get('/facts/random', params)
                .then((response: AxiosResponse<FactDto[]>) => resolve(response.data))
        })
    }

    public addFactToFavourites(fact: FactDto): void {
        const facts = this.getFavouriteFacts();
        if(!facts.map(({ _id} ) => _id).includes(fact._id)) {
            facts.push(fact);
            this.storageService.saveObject(this.storageKey, JSON.stringify(facts));
        }
    }

    public getFavouriteFacts(): FactDto[] {
        try {
            return (JSON.parse(this.storageService.getObject(this.storageKey) as string) as FactDto[]) || [];
        } catch (e) {
            return [];
        }
    }
    public clearFavouriteFacts(): void {
        this.storageService.saveObject(this.storageKey, JSON.stringify([]));
    }
}