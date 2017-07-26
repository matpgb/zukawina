import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { PageNotFound } from './page-not-found/page-not-found.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'members',
        component: MembersComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: '**',
        component: PageNotFound
      }
    ])
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    MembersComponent,
    GalleryComponent,
    PageNotFound
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
