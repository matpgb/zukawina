import { Component } from '@angular/core'; 

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    scroll( elem : any ){
        elem.scrollIntoView(
            {
                behavior: "smooth",
                block:    "end"
            }
        );
    }
}