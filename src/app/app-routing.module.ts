import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {PageNotFoundComponent} from "./content/page-not-found/page-not-found.component";
import { AboutComponent } from "./content/about/about.component";
import {HomeComponent} from "./content/home/home.component";
import {ContactsComponent} from "./content/contacts/contacts.component";
import {GalleryComponent} from "./content/gallery/gallery.component";


const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
