import FactsService from "../services/facts.service";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";

export function clearFavouriteCatFacts(): void {
    const factsService = new FactsService();
    return factsService.clearFavouriteFacts();
}