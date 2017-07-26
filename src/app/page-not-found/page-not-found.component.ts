import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'page-not-found',
    templateUrl: './page-not-found.component.html'
})

export class PageNotFound {
    constructor(private _location : Location ){

    }

    goBack() : void {
        this._location.back();
    }
}