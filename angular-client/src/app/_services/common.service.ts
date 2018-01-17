import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class CommonService {
    constructor(private http: Http) { }

    getAll(url) {
        return this.http.get(url).map((response: Response) => response.json());
    }

    getById(url) {
        return this.http.get(url).map((response: Response) => response.json());
    }

    create(url , user) {
        return this.http.post(url, user);
    }

    update(url, user) {
        return this.http.put(url, user);
    }

    delete(url) {
        return this.http.delete(url);
    }
}
