import FactsService from "../services/facts.service";
import {FactDto} from "../shared/interfaces/api/facts/dto/fact.dto";

export function getCatFacts(): Promise<FactDto[]> {
    const factsService = new FactsService();
    return factsService.getRandomFacts({
        animal_type: 'cat',
        amount: 2
    });
}