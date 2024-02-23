import FactsService from "../services/facts.service";

export function clearFavouriteCatFacts(): void {
    const factsService = new FactsService();
    return factsService.clearFavouriteFacts();
}