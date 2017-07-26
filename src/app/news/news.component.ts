import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
    selector: 'news',
    template: `
        <h1>News Component</h1>
        <h2>Here goes the news</h2>

        <ul>
            <li *ngFor="let newsItem of news">{{ newsItem }}</li>
        </ul>
    `,
    providers: [NewsService]
})

export class NewsComponent implements OnInit {
    news: string[] ;

    constructor( private newsService : NewsService ){
        
    }

    ngOnInit() : void {
        this.getNews();
    }

    private getNews() : void {
        this.newsService
            .getNews()
            .then(
                news => this.news = news
            );
    }
}