import { Injectable } from '@angular/core';

@Injectable()
export class NewsService{
    getNews() : Promise<string[]> {
        return Promise.resolve( ["some", "example", "string", "array"] );
    }
}