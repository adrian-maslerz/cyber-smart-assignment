import FactsService from "../services/facts.service";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";

export function addCatFactToFavourites(fact: FactDto): void {
    const factsService = new FactsService();
    return factsService.addFactToFavourites(fact);
}