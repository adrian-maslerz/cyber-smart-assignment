export default class StorageService {
    public saveObject(key:string, data: string): void {
        localStorage.setItem(key, data);
    }

    public getObject(key:string): string | null {
        return localStorage.getItem(key);
    }
}