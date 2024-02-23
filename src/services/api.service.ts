import axios, {AxiosInstance} from 'axios';

export default class ApiService {
    private readonly baseUrl: string;
    private httpClient: AxiosInstance;
    constructor() {
        this.baseUrl = process.env.REACT_APP_API_URL || '';
        this.httpClient = axios.create({
            headers: {
                "Content-type": "application/json"
            }
        })
    }

    public async get(path: string, params?: any): Promise<any> {
        return this.httpClient.get(this.baseUrl + path, { params})
    }
}