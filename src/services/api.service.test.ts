import ApiService from "./api.service";

jest.mock('axios', () => {
    return {
        create: jest.fn()
    }
});
describe("ApiService", () => {
    let service: ApiService;
    const httpClient = {
        get: jest.fn()
    };
    beforeAll(() => {
        service = new ApiService();
        (service as any).httpClient = httpClient;
        (service as any).baseUrl = 'base-url';
    });

    describe('get', () => {
        it("Should call get method on http client with given url and params and return resolved result", async () => {
            httpClient.get.mockResolvedValueOnce('result');

            const result = await service.get('/path', 'params');

            expect(result).toBe('result');
            expect(httpClient.get).toHaveBeenCalledWith('base-url/path', {params: 'params'});
        })
    })
})