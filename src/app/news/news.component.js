"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var news_service_1 = require("./news.service");
var NewsComponent = (function () {
    function NewsComponent(newsService) {
        this.newsService = newsService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.getNews();
    };
    NewsComponent.prototype.getNews = function () {
        var _this = this;
        this.newsService
            .getNews()
            .then(function (news) { return _this.news = news; });
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    core_1.Component({
        selector: 'news',
        template: "\n        <h1>News Component</h1>\n        <h2>Here goes the news</h2>\n\n        <ul>\n            <li *ngFor=\"let newsItem of news\">{{ newsItem }}</li>\n        </ul>\n    ",
        providers: [news_service_1.NewsService]
    }),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsComponent);
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=news.component.js.map